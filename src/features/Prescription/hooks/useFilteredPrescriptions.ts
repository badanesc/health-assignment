import { usePrescriptionsQuery } from "@/features/Prescription/hooks";
import { usePrescriptionsFilters } from "@/features/Prescription/features/PrescriptionsFilter/store";
import { getPrescriptionStatus } from "@/features/Prescription/helpers";

export const useFilteredPrescriptions = () => {
  const { data, isLoading, error } = usePrescriptionsQuery();
  const { searchTerm, statusFilter } = usePrescriptionsFilters();

  const filteredPrescriptions = data?.prescriptions.filter((prescription) => {
    const status = getPrescriptionStatus(prescription.refillsRemaining);
    const nameMatch = prescription.name.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatch = statusFilter === 'all' || status === statusFilter;

    return nameMatch && statusMatch;
  });

  return { data: { prescriptions: filteredPrescriptions }, isLoading, error };
};
