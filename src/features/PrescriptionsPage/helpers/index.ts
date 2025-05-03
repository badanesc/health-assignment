import { PrescriptionStatus } from '@/features/PrescriptionsPage/types';
import { PRESCRIPTION_STATUS } from '@/features/PrescriptionsPage/constants';

export const getPrescriptionStatus = (refillsRemaining: number):PrescriptionStatus => {
  if (refillsRemaining === 0) {
    return PRESCRIPTION_STATUS.expired;
  } else if (refillsRemaining === 1) {
    return PRESCRIPTION_STATUS.low;
  } else {
    return PRESCRIPTION_STATUS.active;
  }
};
