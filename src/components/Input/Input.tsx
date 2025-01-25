import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

export function Input({ 
  error,
  helperText,
  className,
  ...props 
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        className={classNames(
          styles.input,
          {
            [styles.error]: error
          },
          className
        )}
        {...props}
      />
      {helperText && (
        <span className={classNames(
          styles.helperText,
          {
            [styles.helperTextError]: error
          }
        )}>
          {helperText}
        </span>
      )}
    </div>
  );
}