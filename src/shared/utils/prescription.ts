import { PrescriptionStatus } from '../types/prescription';

export const PRESCRIPTION_STATUS = {
  active: 'active' as const,
  low: 'low' as const,
  expired: 'expired' as const,
} as const;

export const getPrescriptionStatus = (refillsRemaining: number): PrescriptionStatus => {
  if (refillsRemaining === 0) {
    return PRESCRIPTION_STATUS.expired;
  } else if (refillsRemaining === 1) {
    return PRESCRIPTION_STATUS.low;
  } else {
    return PRESCRIPTION_STATUS.active;
  }
}; 
