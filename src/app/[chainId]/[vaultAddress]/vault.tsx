'use client';

import { useState } from 'react';
import { Vault as VaultType } from '../../../api/vaults';
import { Box } from '../../../components';
import { RefreshButton } from './components/RefreshButton';
import { VaultContent } from './components/VaultContent.server';
import styles from './vault.module.scss';

interface VaultProps {
  vault: VaultType;
}

export function VaultContainer({ vault: initialVault }: VaultProps) {
  const [vault, setVault] = useState(initialVault);

  return (
    <Box className={styles.container} rounded>
      <VaultContent vault={vault} />
      <RefreshButton onVaultUpdate={setVault} />
    </Box>
  );
}
