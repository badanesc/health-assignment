import { ContentWrapper } from "@/components/ContentWrapper";
import { PrescriptionsList } from "./PrescriptionsList";
import styles from './PrescriptionsPage.module.css';
import { PrescriptionsFilter } from "../features/PrescriptionsFilter/components";
import { Suspense } from "react";

export const PrescriptionsPage = () => {
  return (
    <ContentWrapper>
        <div className={styles.page}>
          <Suspense fallback={<div>Loading prescriptions list...</div>}>
            <PrescriptionsList />
          </Suspense>
          <PrescriptionsFilter />
        </div>
      </ContentWrapper>
  );
};

