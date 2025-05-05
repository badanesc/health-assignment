"use client";

import Link from "next/link";
import { Prescription, PrescriptionStatus } from "@/shared/types/prescription";
import styles from "./PrescriptionCard.module.css";
import { getPrescriptionStatus } from "@/shared/utils/prescription";
import { PrescriptionRefill } from "@/features/PrescriptionRefill";
import { useQueryClient } from "@tanstack/react-query";
import { makePrescriptionQuery } from "@/shared/queries/prescription";

interface PrescriptionCardProps {
  prescription: Prescription;
}

const getStatusStyles = (status: PrescriptionStatus) => {
  if (status === "expired") {
    return styles.statusNone;
  } else if (status === "low") {
    return styles.statusLow;
  } else {
    return styles.statusGood;
  }
};

export const PrescriptionCard = ({ prescription }: PrescriptionCardProps) => {
  const prescriptionStatus = getPrescriptionStatus(
    prescription.refillsRemaining
  );
  const queryClient = useQueryClient();
  const prefetchPrescriptionDetails = () => {
    queryClient.prefetchQuery(makePrescriptionQuery(prescription.id));
  };

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{prescription.name}</h3>
        <span
          className={`${styles.status} ${getStatusStyles(prescriptionStatus)}`}
        >
          {prescription.refillsRemaining} refill
          {prescription.refillsRemaining !== 1 ? "s" : ""} left
        </span>
      </div>

      <div className={styles.content}>
        <p className={styles.dosage}>Dosage: {prescription.dosage}</p>
        <p className={styles.doctor}>Prescribed by {prescription.doctor}</p>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Next Refill:</span>
            <span className={styles.value}>{prescription.nextRefillDate}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Pharmacy:</span>
            <span className={styles.value}>{prescription.pharmacy}</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <PrescriptionRefill
          id={prescription.id}
          ctaLabel="Request Quick Refill"
        />
        <span
          className="visually-hidden"
          id={`prescription-card-${prescription.id}`}
        >
          View more details about the {prescription.name} prescription
        </span>
        <Link
          onMouseEnter={prefetchPrescriptionDetails}
          onFocus={prefetchPrescriptionDetails}
          href={`/prescriptions/${prescription.id}`}
          className={styles.viewDetails}
          aria-labelledby={`prescription-card-${prescription.id}`}
        >
          View Details
        </Link>
      </div>
    </li>
  );
};
