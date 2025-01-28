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

export function VaultContent({ vault, error }: { vault?: VaultType | null; error?: boolean }) {
  const params = useParams();
  const { t } = useTranslation();
  const vaultId = params.vaultId as string;
  const [vaultData, setVaultData] = useState<VaultType | null | undefined>(vault);
  const [loading, setLoading] = useState(!vault);

  useEffect(() => {
    let mounted = true;
    if (!vaultId || vaultData) return;

    async function fetchVault() {
      try {
        const data = await getVault(vaultId);
        if (mounted) {
          setVaultData(data);
        }
      } catch {
        if (mounted) {
          setVaultData(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchVault();
    return () => {
      mounted = false;
      setVaultData(null);
      setLoading(true);
    };
  }, [vaultId, vaultData]);

  if (error) {
    return <VaultError />;
  }

  if (loading) {
    return <Box>{t.common.loading}</Box>;
  }

  if (!vaultData) {
    return <VaultError />;
  }

  return (
    <Box className={styles.container} rounded>
      <div className={styles.content}>
        <VaultHeader token={vaultData.token} company={vaultData.company} />
        <div className={styles.divider} />
        <Field title={t.vault.fields.totalSupply} value={formatUSD(vaultData.totalSupply)} />
        <Field title={t.vault.fields.instantNetApy} value={formatAPY(vaultData.instantNetApy)} />
        <Field title={t.vault.fields.vaultOwner} value={formatAddress(vaultData.owner)} />
      </div>
      <Button icon={'borrow'} className={styles.borrowButton} />
    </Box>
  );
}
