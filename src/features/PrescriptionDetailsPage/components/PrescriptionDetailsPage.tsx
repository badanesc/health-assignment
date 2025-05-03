'use client';

import { useParams } from "next/navigation";

export const PrescriptionDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Prescription Details Page {id}</h1>
    </div>
  );
};
