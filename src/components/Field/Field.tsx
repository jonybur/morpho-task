import styles from './Field.module.scss';

export interface FieldProps {
  title: string;
  value: string;
  className?: string;
  href?: string;
}

export const Field = ({ title, value, className, href }: FieldProps) => {
  const ValueComponent = href ? 'a' : 'span';
  const valueProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.titleRow}>
        <span className={styles.title}>{title}</span>
        <ValueComponent className={styles.value} {...valueProps}>
          {value}
        </ValueComponent>
      </div>
    </div>
  );
};
