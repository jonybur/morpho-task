import classNames from 'classnames';
import styles from './Input.module.scss';
import { Icon } from '../Icon';

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
      <div className={styles.inputContainer}>
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
        {error && (
          <Icon 
            name="alert"
            width={13}
            height={13}
            className={styles.errorIcon}
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