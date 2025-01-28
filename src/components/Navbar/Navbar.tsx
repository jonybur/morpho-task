import React from 'react';
import Link from 'next/link';
import { Icon } from '../Icon';
import styles from './Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={`${styles.navbar} ${className || ''}`}>
      <div className={styles.content}>
        <Link href="/" className={styles.leftSection}>
          <Icon name="morpho" className={styles.morphoIcon} />
          <span className={styles.title}>Morpho Test</span>
        </Link>
        <a
          href="https://github.com/jonybur/morpho-task"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <span className={styles.buttonText}>Go to Github Repo</span>
          <Icon name="upRightArrow" className={styles.arrowIcon} />
        </a>
      </div>
    </nav>
  );
};
