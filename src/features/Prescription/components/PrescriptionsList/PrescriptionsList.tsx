'use client';

import { Fragment } from "react";
import { usePrescriptionsQuery } from "@/features/Prescription/hooks";
import { PrescriptionCard } from "@/features/Prescription/components";
import styles from "./PrescriptionsList.module.css";

const PrescriptionsList = () => {
  const { data, isLoading, error } = usePrescriptionsQuery();
  const { prescriptions } = data || {};

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!prescriptions) return <div>No prescriptions found</div>;
    
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
