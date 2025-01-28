'use client';

import { Box, Button, Icon } from '../../../../components';
import styles from '../vault.module.scss';

export const VaultError = () => {
  return (
    <Box className={styles.vaultErrorBox} rounded>
      <div className={styles.vaultErrorContainer}>
        <div className={styles.vaultErrorContentWrapper}>
          <div className={styles.vaultErrorTitleWrapper}>
            <Icon name="info" />
            <span className={styles.vaultErrorTitle}>Oops!</span>
          </div>
          <span className={styles.vaultErrorDescription}>
            Something went wrong, please try again.
          </span>
        </div>
        <Button text="Try again" size="small" onClick={() => {}} />
      </div>
    </Box>
  );
};
