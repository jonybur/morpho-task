import styles from './Field.module.scss';

export interface FieldProps {
  title: string;
  value: string;
  className?: string;
}

export const Field = ({ title, value, className }: FieldProps) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.titleRow}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};
