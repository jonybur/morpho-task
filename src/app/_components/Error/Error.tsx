'use client';

import { Box, Button } from '@/components';
import styles from './Error.module.scss';

export function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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