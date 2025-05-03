export interface Prescription {
  id: string;
  name: string;
  dosage: string;
  nextRefillDate: string;
  doctor: string;
  refillsRemaining: number;
  instructions: string;
  pharmacy: string;
  prescribedDate: string;
  expiryDate: string;
  notes?: string;
}

export type PrescriptionStatus = 'active' | 'low' | 'expired';
