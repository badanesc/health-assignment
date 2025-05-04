import { usePrescriptionQuery } from "@/shared/hooks/usePrescriptionQuery";

const getRefillTitle = (prescriptionName: string | null) => {
  return <h5>{`Refill ${prescriptionName} Prescription`}</h5>;
};

export const RefillTitle = ({id}: {id: string}) => {
  const { data, isLoading, error } = usePrescriptionQuery(id, {
    enabled: true
  });
  
  if (isLoading) return getRefillTitle('Loading...');
  if (error || !data) return getRefillTitle(null);
  
  return getRefillTitle(data.prescription.name);
};
