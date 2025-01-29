'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getVault, Vault as VaultType } from '../../../../api/vaults';
import { Button } from '../../../../components';
import styles from '../vault.module.scss';

interface RefreshButtonProps {
  onVaultUpdate: (vault: VaultType) => void;
}

export function RefreshButton({ onVaultUpdate }: RefreshButtonProps) {
  const params = useParams();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleRefresh = async () => {
    if (!params.chainId || !params.vaultAddress) return;

    setIsRefreshing(true);
    try {
      const freshData = await getVault(
        parseInt(params.chainId as string, 10),
        params.vaultAddress as string
      );
      onVaultUpdate(freshData);
    } catch {
      // Keep existing data on error
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <Button
      icon={'borrow'}
      className={styles.borrowButton}
      onClick={handleRefresh}
      disabled={!isHydrated || isRefreshing}
    />
  );
}
