import { PrescriptionStatus } from './types';

export const PRESCRIPTION_STATUS: Record<PrescriptionStatus, PrescriptionStatus> = {
  active: 'active',
  low: 'low',
  expired: 'expired',
};
