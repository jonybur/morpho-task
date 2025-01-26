import classNames from 'classnames';
import styles from './Input.module.scss';
import { Icon } from '../Icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  isLoading?: boolean;
  success?: boolean;
}

export function Input({ 
  error,
  helperText,
  className,
  isLoading,
  success,
  ...props 
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <input
          className={classNames(
            styles.input,
            {
              [styles.error]: error,
              [styles.loading]: isLoading,
              [styles.success]: success
            },
            className
          )}
          {...props}
        />
        {error && (
          <Icon 
            name="alert"
            width={13}
            height={13}
            className={styles.errorIcon}
          />
        )}
        {isLoading && (
          <Icon 
            name="loading"
            width={16}
            height={16}
            className={styles.loadingSpinner}
          />
        )}
        {success && (
          <Icon 
            name="check"
            width={20}
            height={20}
            className={styles.successIcon}
          />
        )}
      </div>
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