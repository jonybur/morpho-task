import { ReactNode } from 'react';
import styles from './Box.module.scss';

export interface BoxProps {
  children: ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={`${styles.box} ${className || ''}`}>
      {children}
    </div>
  );
}; 