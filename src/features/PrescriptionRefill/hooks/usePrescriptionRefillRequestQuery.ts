import { useMutation, useQueryClient } from "@tanstack/react-query";
import { requestPrescriptionRefill, RequestPrescriptionRefillProps } from "../api"; 

export const usePrescriptionRefillRequestQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (props: RequestPrescriptionRefillProps) => requestPrescriptionRefill(props),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prescriptions'] });
    }
  });
}
