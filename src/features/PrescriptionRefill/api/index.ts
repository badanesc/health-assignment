import { Prescription } from "@/features/PrescriptionsPage/types";

export interface RequestPrescriptionRefillProps {
  id: string;
  endDate: string;
  frequency: string;
  notes: string;
}

export const requestPrescriptionRefill = async ({ id, endDate, frequency, notes }: RequestPrescriptionRefillProps): Promise<{ prescription: Prescription }> => {
  console.log("requesting prescription refill with props: ", { id, endDate, frequency, notes });
  const res = await fetch(`http://localhost:3000/api/prescriptions/${id}`, {
    method: "PUT",
    body: JSON.stringify({ endDate, frequency, notes }),
  });
  
  return res.json();
};
