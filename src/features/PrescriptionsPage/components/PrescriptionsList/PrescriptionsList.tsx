'use client';

import { useFilteredPrescriptions } from "../../hooks";
import { PrescriptionCard } from "../PrescriptionCard";
import styles from "./PrescriptionsList.module.css";

const PrescriptionsList = () => {
  const { data, isLoading } = useFilteredPrescriptions();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No prescriptions found</div>;

  const { prescriptions } = data;
    
  return (
    <ul className={styles.list}>
      {prescriptions.map((prescription) => (
        <PrescriptionCard key={prescription.id} prescription={prescription} />
      ))}
    </ul>
  );
};

export { PrescriptionsList };
