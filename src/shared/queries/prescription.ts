import { fetchPrescription } from "../api/prescriptions";
import { requestPrescriptionRefill, RequestPrescriptionRefillProps } from "../api/prescriptions";

export const makePrescriptionQuery = (id: string) => {
  return {
    queryKey: ['prescription', id],
    queryFn: () => fetchPrescription(id),
  }
}

export const makePrescriptionRefillMutation = () => {
  return {
    mutationFn: (props: RequestPrescriptionRefillProps) => requestPrescriptionRefill(props),
  }
}
