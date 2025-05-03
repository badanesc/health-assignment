import { useQuery } from "@tanstack/react-query";
import { fetchPrescriptions } from "../api/prescriptions";

export const usePrescriptionsQuery = () => {
  return useQuery({
    queryKey: ['prescriptions'],
    queryFn: fetchPrescriptions,
  });
}; 
