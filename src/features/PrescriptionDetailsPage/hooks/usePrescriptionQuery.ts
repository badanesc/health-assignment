import { useQuery } from "@tanstack/react-query";
import { fetchPrescription } from "../api";

export const usePrescriptionQuery = (id: string) => {
  return useQuery({ queryKey: ['prescription', id], queryFn: () => fetchPrescription(id) });
};
  