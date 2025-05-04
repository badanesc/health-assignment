import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchPrescriptions } from "../api/prescriptions";

export const usePrescriptionsQuery = () => {
  return useSuspenseQuery({
    queryKey: ['prescriptions'],
    queryFn: fetchPrescriptions,
  });
}; 
