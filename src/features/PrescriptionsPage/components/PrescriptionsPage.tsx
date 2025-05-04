import { ContentWrapper } from "@/components/ContentWrapper";
import { PrescriptionsList } from "./PrescriptionsList";
import styles from './PrescriptionsPage.module.css';
import { PrescriptionsFilter } from "../features/PrescriptionsFilter/components";

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

