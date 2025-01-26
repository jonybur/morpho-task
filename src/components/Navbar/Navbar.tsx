import React from 'react';
import styles from './Navbar.module.scss';
import { Icon } from '../Icon';

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={`${styles.navbar} ${className || ''}`}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <Icon name="morpho" className={styles.morphoIcon} />
          <span className={styles.title}>Morpho Test</span>
        </div>
        <button className={styles.button}>
          <span className={styles.buttonText}>Button</span>
          <Icon name="arrow" className={styles.arrowIcon} />
        </button>
      </div>
    </nav>
  );
}; 