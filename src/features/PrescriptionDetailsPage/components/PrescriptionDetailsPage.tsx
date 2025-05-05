"use client";

import Link from "next/link";
import { ContentWrapper } from "@/components/ContentWrapper";
import { PrescriptionDetail } from "./PrescriptionDetail";
import styles from "./PrescriptionDetailsPage.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { makePrescriptionsQuery } from "@/shared/queries/prescriptions";

export const PrescriptionDetailsPage = () => {
  const queryClient = useQueryClient();
  const prefetchPrescriptions = () => {
    queryClient.prefetchQuery(makePrescriptionsQuery());
  };

  return (
    <ContentWrapper>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Prescription Details Page</h1>
        <Link
          onMouseEnter={prefetchPrescriptions}
          onFocus={prefetchPrescriptions}
          href="/prescriptions"
          className={styles.backLink}
        >
          Back to Prescriptions
        </Link>
      </div>
      <PrescriptionDetail />
    </ContentWrapper>
  );
};
