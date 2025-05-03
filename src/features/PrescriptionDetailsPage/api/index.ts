import { Prescription } from "@/shared/types/prescription";

export const fetchPrescription = async (id: string): Promise<{ prescription: Prescription }> => {
  console.log("fetching prescription with id: ", id);
  const res = await fetch(`http://localhost:3000/api/prescriptions/${id}`);
  return res.json();
};
