import classNames from 'classnames';
import styles from './Input.module.scss';
import { Icon } from '../Icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  isLoading?: boolean;
}

export function Input({ 
  error,
  helperText,
  className,
  isLoading,
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
              [styles.loading]: isLoading
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