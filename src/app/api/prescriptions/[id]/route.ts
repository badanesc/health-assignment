import { MOCK_PRESCRIPTIONS } from "@/data/prescriptions";
import { RequestPrescriptionRefillProps } from "@/features/PrescriptionRefill/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getPrescriptionById = (id: string) => {
  return MOCK_PRESCRIPTIONS.find(prescription => prescription.id === id);
}

export const GET = async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  console.log("\n\nFetching prescription ...");

  await delay(400);

  const prescription = getPrescriptionById(id);

  console.log("prescription fetched");
  return Response.json({ prescription });
};

// Ideally, I would have a separate endpoint specifically for the refill request.
export const PUT = async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { endDate, frequency, notes }: RequestPrescriptionRefillProps = await request.json();

  console.log("\n\Requesting prescription refill ...");
  
  await delay(1700);

  const prescription = getPrescriptionById(id);

  if (!prescription) {
    return Response.json({ error: "Prescription not found" }, { status: 404 });
  }
  
  console.log("prescription params: ", { id, endDate, frequency, notes });
  console.log("prescription refill requested");
  return Response.json({ 
    message: "Prescription refill requested", 
    prescription: {
      ...prescription,
      refillsRemaining: prescription.refillsRemaining + 2,
      nextRefillDate: endDate,
      frequency,
      notes,
    }
  });
}
