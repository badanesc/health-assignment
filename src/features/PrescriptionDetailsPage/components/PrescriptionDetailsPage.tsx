import { ContentWrapper } from "@/components/ContentWrapper";
import { PrescriptionDetail } from "./PrescriptionDetail";
import styles from "./PrescriptionDetailsPage.module.css";
export const PrescriptionDetailsPage = () => {
  return (
    <ContentWrapper>
      <h1 className={styles.pageTitle}>Prescription Details Page</h1>
      <PrescriptionDetail />
    </ContentWrapper>
  );
};
