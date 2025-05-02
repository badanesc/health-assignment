import { useQuery } from "@tanstack/react-query";
import { fetchPrescriptions } from "../api";

export const usePrescriptionsQuery = () => {
  return useQuery({
    queryKey: ['prescriptions'],
    queryFn: fetchPrescriptions,
  });
};
