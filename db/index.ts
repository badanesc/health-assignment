import sqlite3Module from "sqlite3";
import { MOCK_PRESCRIPTIONS } from "@/data/prescriptions";

const sqlite3 = sqlite3Module.verbose();

const db = new sqlite3.Database(
  "db/db.txt",
  sqlite3Module.OPEN_READWRITE,
  async (error) => {
    if (error) {
      console.error({ error });
      return;
    }

    await run("DROP TABLE IF EXISTS prescriptions");

    await run(
      "CREATE TABLE prescriptions (id TEXT PRIMARY KEY, name TEXT, dosage TEXT, nextRefillDate TEXT, doctor TEXT, refillsRemaining INT, instructions TEXT, pharmacy TEXT, prescribedDate TEXT, expiryDate TEXT)"
    );

    for (const prescription of MOCK_PRESCRIPTIONS) {
      await run(
        "INSERT INTO prescriptions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          prescription.id,
          prescription.name,
          prescription.dosage,
          prescription.nextRefillDate,
          prescription.doctor,
          prescription.refillsRemaining,
          prescription.instructions,
          prescription.pharmacy,
          prescription.prescribedDate,
          prescription.expiryDate,
        ]
      );
    }
  }
);

function run(command: string, params: unknown[] = []): Promise<void> {
  return new Promise((res, rej) => {
    db.run(command, params, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
}
