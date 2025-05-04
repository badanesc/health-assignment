import { fetchPrescriptions } from "../api/prescriptions";

export const makePrescriptionsQuery = () => {
  return {
    queryKey: ['prescriptions'],
    queryFn: fetchPrescriptions,
  }
}
