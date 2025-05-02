'use client';

import { ContentWrapper } from "@/components/ContentWrapper";
import { usePrescriptionsQuery } from "../hooks";

export const PrescriptionsPage = () => {
  const { data: prescriptions, isLoading, error } = usePrescriptionsQuery();

  console.log(prescriptions);

  if (isLoading) return <ContentWrapper><div>Loading...</div></ContentWrapper>;
  if (error) return <ContentWrapper><div>Error: {error.message}</div></ContentWrapper>;

  return (
    <ContentWrapper>
      <div>PrescriptionPage</div>
    </ContentWrapper>
  );
};

