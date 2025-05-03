'use client';

import { useParams } from "next/navigation";
import { usePrescriptionQuery } from "../hooks";

export const PrescriptionDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = usePrescriptionQuery(id as string);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  const { prescription } = data;

  return (
    <div>
      <h1>Prescription Details Page {id}</h1>
      <p>{prescription.name}</p>
    </div>
  );
};
