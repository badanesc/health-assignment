import { Prescription } from "@/features/Prescription/types";

export const fetchPrescriptions = async (): Promise<{ prescriptions: Prescription[] }> => {
  const res = await fetch(`http://localhost:3000/api/prescriptions`);
  return res.json();
};
