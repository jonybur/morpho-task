'use client';

import { Box, Button, Icon } from '../../../../components';
import { useTranslation } from '../../../../utils/useTranslation';
import styles from '../vault.module.scss';

export const VaultError = () => {
  const { t } = useTranslation();

  return (
    <Box className={styles.vaultErrorBox} rounded>
      <div className={styles.vaultErrorContainer}>
        <div className={styles.vaultErrorContentWrapper}>
          <div className={styles.vaultErrorTitleWrapper}>
            <Icon name="info" />
            <span className={styles.vaultErrorTitle}>{t.vault.error.title}</span>
          </div>
          <span className={styles.vaultErrorDescription}>{t.vault.error.description}</span>
        </div>
        <Button text={t.common.tryAgain} size="small" onClick={() => {}} />
      </div>
    </Box>
  );
};
