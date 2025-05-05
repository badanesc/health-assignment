"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { PrescriptionRefill } from "@/features/PrescriptionRefill/components";
import { getPrescriptionStatus } from "@/shared/utils/prescription";
import styles from "./PrescriptionDetail.module.css";
import { PrescriptionStatus } from "@/shared/types/prescription";
import { makePrescriptionQuery } from "@/shared/queries/prescription";
import { useQuery } from "@tanstack/react-query";

const getStatusStyles = (status: PrescriptionStatus) => {
  if (status === "expired") {
    return styles.statusNone;
  } else if (status === "low") {
    return styles.statusLow;
  } else {
    return styles.statusGood;
  }
};

const getActionLabel = (status: PrescriptionStatus) => {
  if (status === "expired") {
    return "Prescription expired; request new prescription or refill.";
  } else if (status === "low") {
    return "Prescription is running low; refill soon.";
  } else {
    return "Prescription is in good condition; continue taking as prescribed.";
  }
};

export const PrescriptionDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(makePrescriptionQuery(id as string));

  if (isLoading) {
    return <div>Loading prescription details...</div>;
  }

  if (!data) {
    return <div>Error loading prescription</div>;
  }

  const { prescription } = data;

  const prescriptionStatus = getPrescriptionStatus(
    prescription.refillsRemaining
  );

  return (
    <div className={styles.prescription}>
      <div className={styles.prescriptionInfo}>
        <h3 className={styles.detailItem}>
          <strong>Name: </strong>
          {prescription.name}
        </h3>
        <p className={styles.detailItem}>
          <strong>Dosage: </strong>
          {prescription.dosage}
        </p>
        <p className={styles.detailItem}>
          <strong>Next Refill Date: </strong>
          {prescription.nextRefillDate}
        </p>
        <p className={styles.detailItem}>
          <strong>Doctor: </strong>
          {prescription.doctor}
        </p>
        <p className={styles.detailItem}>
          <strong>Refills Remaining: </strong>
          <span
            className={`${styles.prescriptionStatus} ${getStatusStyles(prescriptionStatus)}`}
          >
            {prescription.refillsRemaining} refills left
          </span>
        </p>
        <p className={styles.detailItem}>
          <strong>Instructions: </strong>
          {prescription.instructions}
        </p>
        <p className={styles.detailItem}>
          <strong>Pharmacy: </strong>
          {prescription.pharmacy}
        </p>
        <p className={styles.detailItem}>
          <strong>Prescribed Date: </strong>
          {prescription.prescribedDate}
        </p>
        <p className={styles.detailItem}>
          <strong>Expiry Date: </strong>
          {prescription.expiryDate}
        </p>
        <details>
          <summary>Effects of medicine</summary>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            itaque repudiandae earum, cum officia natus minus. Maiores
            accusantium numquam ab veniam! Nihil excepturi vero consequatur
            laboriosam similique a quasi, quisquam aspernatur, porro,
            perspiciatis quae. Vel nulla alias deleniti doloremque eum
            reiciendis dolorum vitae rerum explicabo, aut nemo voluptates et
            veniam labore quo libero facilis ex ea perferendis, numquam itaque,
            delectus necessitatibus totam! Placeat, voluptatum voluptas fuga
            nemo sunt enim illo natus! Non odit corrupti eius laboriosam, iure
            accusamus doloremque velit aspernatur recusandae, error autem
            similique minus earum aut! Officiis ratione nesciunt distinctio
            cumque laboriosam soluta quis quibusdam ad pariatur doloremque?
          </p>
        </details>
      </div>
      <div className={styles.prescriptionAside}>
        <figure>
          <legend>Medicine Picture for reference</legend>
          <Image
            className={styles.prescriptionImage}
            src="https://picsum.photos/seed/picsum/600/400"
            alt=""
            width={600}
            height={400}
          />
        </figure>

        <div>
          <p>{getActionLabel(prescriptionStatus)}</p>
          <div className={styles.buttonGroup}>
            <PrescriptionRefill
              id={prescription.id}
              ctaLabel="Request Refill"
            />

            <button type="button">Cancel Prescription</button>
          </div>
        </div>
      </div>
    </div>
  );
};
