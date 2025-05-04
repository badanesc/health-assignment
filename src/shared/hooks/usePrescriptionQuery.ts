import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchPrescription } from "../api/prescriptions";

type PrescriptionData = Awaited<ReturnType<typeof fetchPrescription>>;

export const usePrescriptionQuery = (
  id: string,
  options?: Omit<UseQueryOptions<PrescriptionData, Error>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: ['prescription', id],
    queryFn: () => fetchPrescription(id),
    ...options
  });
}; 
