'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getVault, Vault as VaultType } from '../../../api/vaults';
import { Box, Button, Field } from '../../../components';
import { formatAddress, formatAPY, formatUSD } from '../../../utils/helpers';
import { useTranslation } from '../../../utils/useTranslation';
import { VaultError } from './components/VaultError';
import { VaultHeader } from './components/VaultHeader';
import styles from './vault.module.scss';

interface VaultContentProps {
  vault?: VaultType | null;
  error?: boolean;
}

const getExplorerUrl = (chainId: number, address: string) => {
  return chainId === 1
    ? `https://etherscan.io/address/${address}`
    : `https://basescan.org/address/${address}`;
};

export function VaultContent({ vault: initialVault, error }: VaultContentProps) {
  const params = useParams();
  const { t } = useTranslation();
  const [vault, setVault] = useState(initialVault);
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
      setVault(freshData);
    } catch {
      // Keep existing data on error
    } finally {
      setIsRefreshing(false);
    }
  };

  if (error) {
    return <VaultError />;
  }

  if (!vault) {
    return <Box>{t.common.loading}</Box>;
  }

  const explorerUrl = getExplorerUrl(vault.chainId, vault.state.owner);

  return (
    <Box className={styles.container} rounded>
      <div className={styles.content}>
        <VaultHeader
          name={vault.name}
          image={vault.metadata.image}
          curators={vault.metadata.curators.map((c) => c.name).join(', ')}
        />
        <div className={styles.divider} />
        <Field title={t.vault.fields.totalSupply} value={formatUSD(vault.state.totalAssetsUsd)} />
        <Field title={t.vault.fields.instantNetApy} value={formatAPY(vault.state.netApy)} />
        <Field
          title={t.vault.fields.vaultOwner}
          value={formatAddress(vault.state.owner)}
          href={explorerUrl}
        />
      </div>
      <Button
        icon={'borrow'}
        className={styles.borrowButton}
        onClick={handleRefresh}
        disabled={!isHydrated || isRefreshing}
      />
    </Box>
  );
}
