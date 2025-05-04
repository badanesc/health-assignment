import { useQuery } from "@tanstack/react-query";
import { makePrescriptionQuery } from "@/shared/queries/prescription";

const getRefillTitle = (prescriptionName: string | null) => {
  return <h5>{`Refill ${prescriptionName} Prescription`}</h5>;
};

export const RefillTitle = ({id}: {id: string}) => {
  const { data, isLoading, error } = useQuery(makePrescriptionQuery(id));
  
  if (isLoading) return getRefillTitle('Loading...');
  if (error || !data) return getRefillTitle(null);
  
  return getRefillTitle(data.prescription.name);
};
