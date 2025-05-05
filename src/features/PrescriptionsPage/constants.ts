import { PrescriptionStatus } from "@/shared/types/prescription";

export const PRESCRIPTION_STATUS: Record<
  PrescriptionStatus,
  PrescriptionStatus
> = {
  active: "active",
  low: "low",
  expired: "expired",
};
