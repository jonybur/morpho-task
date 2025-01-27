import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVault, Vault as VaultType } from '../../api/vaults';
import steakhouseLogo from '../../assets/images/steakhouse.svg';
import { Box, Button, Field } from '../../components';
import { formatAddress, formatAPY, formatUSD } from '../../utils/helpers';
import { ErrorPage } from '../Error';
import styles from './Vault.module.scss';

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

export const VaultPage = () => {
  const { vaultId } = useParams();
  const [vaultData, setVaultData] = useState<VaultType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVault = async () => {
      if (!vaultId) return;

      try {
        const vault = await getVault(vaultId);
        setVaultData(vault);
      } catch {
        setError('Failed to load vault');
      } finally {
        setLoading(false);
      }
    };

    fetchVault();
  }, [vaultId]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error || !vaultData) {
    return <ErrorPage />;
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
};
