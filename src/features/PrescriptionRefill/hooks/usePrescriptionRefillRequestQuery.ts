import { useMutation } from "@tanstack/react-query";
import { requestPrescriptionRefill, RequestPrescriptionRefillProps } from "../api"; 

export const usePrescriptionRefillRequestQuery = () => {
  return useMutation({
    mutationFn: (props: RequestPrescriptionRefillProps) => requestPrescriptionRefill(props),
  });
}
