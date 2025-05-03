import { Prescription } from '../types/prescription';

export const fetchPrescriptions = async (): Promise<{ prescriptions: Prescription[] }> => {
  const res = await fetch(`http://localhost:3000/api/prescriptions`);
  return res.json();
};

export const fetchPrescription = async (id: string): Promise<{ prescription: Prescription }> => {
  const res = await fetch(`http://localhost:3000/api/prescriptions/${id}`);
  return res.json();
};

export interface RequestPrescriptionRefillProps {
  id: string;
  endDate: string;
  frequency: string;
  notes: string;
}

export const requestPrescriptionRefill = async (props: RequestPrescriptionRefillProps): Promise<{ prescription: Prescription }> => {
  const res = await fetch(`http://localhost:3000/api/prescriptions/${props.id}`, {
    method: "PUT",
    body: JSON.stringify(props),
  });
  return res.json();
}; 
