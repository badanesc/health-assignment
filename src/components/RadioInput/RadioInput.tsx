import styles from './RadioInput.module.css';

interface RadioInputProps {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  checked,
  defaultChecked,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={styles.radioInput}>
      <input checked={checked} defaultChecked={defaultChecked} type="radio" id={`${value}-radio`} name={name} value={value} onChange={onChange} />
      <label htmlFor={`${value}-radio`}>{label}</label>
    </div>
  )
};
