import React from 'react';
import classNames from 'classnames';
import { Icon, IconName } from '../Icon';
import styles from './Button.module.scss';

type ButtonSize = 'normal' | 'small';

type BaseButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Progress state
   */
  progress?: boolean;
  /**
   * Additional className
   */
  className?: string;
  /**
   * Button size variant
   * @default 'normal'
   */
  size?: ButtonSize;
};

type TextButtonProps = BaseButtonProps & {
  /**
   * Button text content
   */
  text: string;
  icon?: never;
};

type IconButtonProps = BaseButtonProps & {
  /**
   * Icon name
   */
  icon: IconName;
  text?: never;
};

export type ButtonProps = TextButtonProps | IconButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, icon, error, progress, className, disabled, size = 'normal', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          styles.button,
          {
            [styles.error]: error,
            [styles.progress]: progress,
            [styles.circle]: icon !== undefined,
            [styles.small]: size === 'small',
          },
          className
        )}
        disabled={disabled || progress}
        {...props}
      >
        {icon ? <Icon name={icon} className={styles.icon} /> : text}
      </button>
    );
  }
);

Button.displayName = 'Button';
