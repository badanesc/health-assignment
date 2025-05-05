import sqlite3Module from "sqlite3";
const sqlite3 = sqlite3Module.verbose();

export const dynamic = "force-dynamic";
export const revalidate = 0;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  console.log("\n\nFetching prescriptions ...");

  await delay(400);

  const prescriptions = await new Promise((res) => {
    const db = new sqlite3.Database(
      "db/db.txt",
      sqlite3Module.OPEN_READWRITE,
      async (error: Error | null) => {
        try {
          if (error) {
            return res(null);
          }

          db.all("SELECT * FROM prescriptions", [], (_, rows) => {
            return res(rows);
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
      }
    );
  });

  console.log("prescriptions fetched");
  return Response.json({ prescriptions: prescriptions });
};
