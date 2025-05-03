import { useMutation } from "@tanstack/react-query";
import { requestPrescriptionRefill, RequestPrescriptionRefillProps } from "../api/prescriptions";

export const usePrescriptionRefillMutation = () => {
  return useMutation({
    mutationFn: (props: RequestPrescriptionRefillProps) => requestPrescriptionRefill(props),
  });
}; 
