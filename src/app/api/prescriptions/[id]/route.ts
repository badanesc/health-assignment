import { RequestPrescriptionRefillProps } from "@/shared/api/prescriptions";
import { Prescription } from "@/shared/types/prescription";
import sqlite3Module from "sqlite3";
const sqlite3 = sqlite3Module.verbose();

export const dynamic = "force-dynamic";
export const revalidate = 0;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getPrescriptionById = async (id: string): Promise<Prescription | null> => {
  return new Promise((res) => {
    const db = new sqlite3.Database("db/db.txt", sqlite3Module.OPEN_READWRITE, async (error: Error | null) => {
      try {
        if (error) {
          return res(null);
        }

        db.get("SELECT * FROM prescriptions WHERE id = ?", [id], (_, row) => {
          return res(row as Prescription | null);
        });
      } catch {
        return res(null);
      } finally {
        try {
          db.close();
        } catch {
          // Ignore close errors
        }
      }
    });
  });
}

const updatePrescription = async (id: string, updates: Partial<Prescription>): Promise<Prescription | null> => {
  return new Promise((res) => {
    const db = new sqlite3.Database("db/db.txt", sqlite3Module.OPEN_READWRITE, async (error: Error | null) => {
      try {
        if (error) {
          return res(null);
        }

        const updateFields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
        const updateValues = Object.values(updates);
        
        db.run(
          `UPDATE prescriptions SET ${updateFields} WHERE id = ?`,
          [...updateValues, id],
          (error) => {
            if (error) {
              return res(null);
            }
            return getPrescriptionById(id).then(res);
          }
        );
      } catch {
        return res(null);
      } finally {
        try {
          db.close();
        } catch {
          // Ignore close errors
        }
      }
    });
  });
}

export const GET = async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  console.log("\n\nFetching prescription ...");

  await delay(400);

  const prescription = await getPrescriptionById(id);

  console.log("prescription fetched");
  return Response.json({ prescription });
};

// Ideally, there should be a separate endpoint/path specifically for the refill request.
// This is just a quick hack to get the refill request working.
export const PUT = async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { endDate, frequency, notes }: RequestPrescriptionRefillProps = await request.json();

  console.log("\n\Requesting prescription refill ...");
  
  await delay(1700);

  const prescription = await getPrescriptionById(id);

  if (!prescription) {
    return Response.json({ error: "Prescription not found" }, { status: 404 });
  }
  
  console.log("sending prescription note somewhere else...", notes);
  console.log("should update the date fields based on the frequency and end date", frequency);
  
  const updatedPrescription = await updatePrescription(id, {
    refillsRemaining: prescription.refillsRemaining + 2,
    nextRefillDate: endDate,
  });

  if (!updatedPrescription) {
    return Response.json({ error: "Failed to update prescription" }, { status: 500 });
  }

  console.log("prescription refill requested");
  return Response.json({ 
    message: "Prescription refill requested"
  });
}
