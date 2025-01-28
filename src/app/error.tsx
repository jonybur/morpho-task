'use client';

import { useEffect } from 'react';
import { Box, Button } from '../components';
import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box className={styles.errorBox} rounded>
      <div className={styles.errorContainer}>
        <div className={styles.errorContentWrapper}>
          <h2 className={styles.errorTitle}>Something went wrong!</h2>
          <p className={styles.errorDescription}>
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>
        <Button text="Try again" size="small" onClick={reset} />
      </div>
    </Box>
  );
} 