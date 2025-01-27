import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Icon } from '../Icon';

export interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={`${styles.navbar} ${className || ''}`}>
      <div className={styles.content}>
        <Link to="/" className={styles.leftSection}>
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