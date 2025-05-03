'use client';

import { Fragment } from "react";
import { useFilteredPrescriptions } from "@/features/PrescriptionsPage/hooks";
import { PrescriptionCard } from "@/features/PrescriptionsPage/components";
import styles from "./PrescriptionsList.module.css";

const PrescriptionsList = () => {
  const { data, isLoading, error } = useFilteredPrescriptions();
  const { prescriptions } = data || {};

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!prescriptions || !prescriptions.length) return <div>No prescriptions found</div>;
    
  return (
    <ul className={styles.list}>
      {prescriptions.map((prescription) => (
        <Fragment key={prescription.id}>
          <PrescriptionCard prescription={prescription} />
        </Fragment>
      ))}
    </ul>
  );
};

export { PrescriptionsList };
