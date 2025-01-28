'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVault, Vault as VaultType } from '../../../../api/vaults';
import steakhouseLogo from '../../../../assets/images/steakhouse.svg';
import { Box, Button, Field, Icon } from '../../../../components';
import { formatAddress, formatAPY, formatUSD } from '../../../../utils/helpers';
import styles from './vault.module.scss';

const VaultHeader = ({ token, company }: { token: string; company: string }) => {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        <img src={steakhouseLogo} alt="Steakhouse logo" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{token}</div>
        <div className={styles.subtitle}>{company}</div>
      </div>
    </div>
  );
};

const VaultError = () => {
  return (
    <Box className={styles.vaultErrorBox} rounded>
      <div className={styles.vaultErrorContainer}>
        <div className={styles.vaultErrorContentWrapper}>
          <div className={styles.vaultErrorTitleWrapper}>
            <Icon name="info" />
            <span className={styles.vaultErrorTitle}>Oops!</span>
          </div>
          <span className={styles.vaultErrorDescription}>Something went wrong, please try again.</span>
        </div>
        <Button text="Try again" size="small" onClick={()=>{}} />
      </div>
    </Box>
  );
};

export function VaultContent({ vault, error }: { vault?: VaultType | null; error?: boolean }) {
  const { vaultId = '' } = useParams<{ vaultId: string }>();
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
  }, [vaultId]);

  if (error) {
    return <VaultError />;
  }

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (!vaultData) {
    return <VaultError />;
  }

  return (
    <Box className={styles.container} rounded>
      <div className={styles.content}>
        <VaultHeader token={vaultData.token} company={vaultData.company} />
        <div className={styles.divider} />
        <Field title="Total Supply (USD)" value={formatUSD(vaultData.totalSupply)} />
        <Field title="Instant Net APY" value={formatAPY(vaultData.instantNetApy)} />
        <Field title="Vault Owner" value={formatAddress(vaultData.owner)} />
      </div>
      <Button icon={'borrow'} />
    </Box>
  );
}
