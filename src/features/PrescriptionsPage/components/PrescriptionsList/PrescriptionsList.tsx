'use client';

import { Fragment } from "react";
import { useFilteredPrescriptions } from "../../hooks";
import { PrescriptionCard } from "../PrescriptionCard";
import styles from "./PrescriptionsList.module.css";

const PrescriptionsList = () => {
  const { data } = useFilteredPrescriptions();
  const { prescriptions } = data;
    
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
