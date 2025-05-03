import Link from "next/link";
import { ContentWrapper } from "@/components/ContentWrapper";
import { PrescriptionDetail } from "./PrescriptionDetail";
import styles from "./PrescriptionDetailsPage.module.css";

export const PrescriptionDetailsPage = () => {
  return (
    <ContentWrapper>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Prescription Details Page</h1>
        <Link href="/prescriptions" className={styles.backLink}>Back to Prescriptions</Link>
      </div>
      <PrescriptionDetail />
    </ContentWrapper>
  );
};
