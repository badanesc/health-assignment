import { useCallback } from "react";
import { RadioInput } from "@/components/RadioInput";
import { PRESCRIPTION_STATUS } from "../../../../constants";
import { PrescriptionStatus } from "@/shared/types/prescription";
import { usePrescriptionsFilters } from "../../store";

import styles from "./StatusRadioGroup.module.css";

export const StatusRadioGroup = () => {
  const { active, low, expired } = PRESCRIPTION_STATUS;
  const { setStatusFilter } = usePrescriptionsFilters();

  const handleStatusChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStatusFilter(e.target.value as PrescriptionStatus);
    },
    [setStatusFilter]
  );

  return (
    <fieldset className={styles.radioGroup}>
      <legend className={styles.legend}>Filter by prescription status</legend>
      <div className={styles.radioGroupContent}>
        <RadioInput
          label="All"
          defaultChecked
          name="status"
          value="all"
          onChange={handleStatusChange}
        />
        <RadioInput
          label="Active"
          name="status"
          value={active}
          onChange={handleStatusChange}
        />
        <RadioInput
          label="Low"
          name="status"
          value={low}
          onChange={handleStatusChange}
        />
        <RadioInput
          label="Expired"
          name="status"
          value={expired}
          onChange={handleStatusChange}
        />
      </div>
    </fieldset>
  );
};
