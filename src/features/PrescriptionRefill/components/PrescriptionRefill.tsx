import { useRef, useState } from "react";
import { RefillTitle } from "./RefillTitle";
import styles from "./PrescriptionRefill.module.css";
import { RequestPrescriptionRefillProps } from "@/shared/api/prescriptions";
import { makePrescriptionRefillMutation } from "@/shared/queries/prescription";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PrescriptionRefillProps {
  id: string;
  ctaLabel: string;
}

export const PrescriptionRefill: React.FC<PrescriptionRefillProps> = ({ id, ctaLabel }) => {
  const dialogId = `refill-dialog-${id}`;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const queryClient = useQueryClient();
  const { mutate: requestRefill, isPending: isRefillPending } = useMutation(
    {
    ...makePrescriptionRefillMutation(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prescriptions'] });
    },
  });

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    dialogRef.current?.showModal();
  };

  const handleCloseDialog = () => {
    dialogRef.current?.close();
    setIsDialogOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const endDate = formData.get('end-date');
    const frequency = formData.get('frequency');
    const notes = formData.get('notes');

    requestRefill({ id, endDate, frequency, notes } as RequestPrescriptionRefillProps);
    handleCloseDialog();
    formRef.current?.reset();
  };

  return (
    <div>
      <dialog id={dialogId} ref={dialogRef} className={styles.dialog}>
        <div className={styles.dialogHeader}>
          {isDialogOpen && <RefillTitle id={id} />}
          <button type="button" onClick={handleCloseDialog}>
            <span className='visually-hidden'>Close refill dialog</span>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <p className={styles.dialogDescription}>This form will only update the count of the refills remaining and the expiry date.</p>
        
        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.formGroup}>
            <label htmlFor="end-date">End Date*</label>
            <input required type="date" id="end-date" name="end-date" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="frequency">Frequency*</label>
            <select required id="frequency" name="frequency" defaultValue="monthly">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" rows={4} name="notes"></textarea>
          </div>
          
          <div className={styles.buttonGroup}>
            <button type="submit">Request Refill</button>
            <button type="button" onClick={handleCloseDialog}>Cancel</button>
          </div>
        </form>
      </dialog>

      { !isRefillPending && <button type="button" aria-controls={dialogId} className={styles.trigger} onClick={handleOpenDialog}>{ctaLabel}</button>}
      { isRefillPending && <span><strong>Requesting refill...</strong></span>}
    </div>
  );
};
