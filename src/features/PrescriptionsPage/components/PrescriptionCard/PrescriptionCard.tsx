'use client';

import Link from 'next/link';
import { Prescription } from '@/features/PrescriptionsPage/types';
import styles from './PrescriptionCard.module.css';
import { getPrescriptionStatus } from '@/features/PrescriptionsPage/helpers';
interface PrescriptionCardProps {
  prescription: Prescription;
}

export const PrescriptionCard = ({ prescription }: PrescriptionCardProps) => {
  // Format the date to be more readable
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };
  
  // Determine status styling based on refills remaining
  const prescriptionStatus = getPrescriptionStatus(prescription.refillsRemaining);
  const getStatusStyles = () => {
    if (prescriptionStatus === 'expired') {
      return styles.statusNone;
    } else if (prescriptionStatus === 'low') {
      return styles.statusLow;
    } else {
      return styles.statusGood;
    }
  };

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{prescription.name}</h3>
        <span className={`${styles.status} ${getStatusStyles()}`}>
          {prescription.refillsRemaining} refill{prescription.refillsRemaining !== 1 ? 's' : ''} left
        </span>
      </div>
      
      <div className={styles.content}>
        <p className={styles.dosage}>Dosage: {prescription.dosage}</p>
        <p className={styles.doctor}>Prescribed by {prescription.doctor}</p>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.label}>Next Refill:</span>
            <span className={styles.value}>{formatDate(prescription.nextRefillDate)}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>Pharmacy:</span>
            <span className={styles.value}>{prescription.pharmacy}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.footer}>
        <span className="visually-hidden" id={`prescription-card-${prescription.id}`}>View more details about the {prescription.name} prescription</span>
        <Link href={`/prescriptions/${prescription.id}`} className={styles.viewDetails} aria-labelledby={`prescription-card-${prescription.id}`}>View Details</Link>
      </div>
    </li>
  );
};
