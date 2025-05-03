import { ContentWrapper } from "@/components/ContentWrapper";
import { PrescriptionsList } from "@/features/Prescription/components";
import styles from './PrescriptionsPage.module.css';
import { PrescriptionsFilter } from "@/features/Prescription/features/PrescriptionsFilter/components";

export const PrescriptionsPage = () => {
  return (
    <ContentWrapper>
      <div className={styles.page}>
        <PrescriptionsList />
        <PrescriptionsFilter />
      </div>
    </ContentWrapper>
  );
};

