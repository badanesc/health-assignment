import { Prescription } from "@/features/PrescriptionsPage/types";

export const fetchPrescription = async (id: string): Promise<{ prescription: Prescription }> => {
  const res = await fetch(`http://localhost:3000/api/prescriptions/${id}`);
  return res.json();
};
