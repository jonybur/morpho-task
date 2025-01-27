import { useParams } from "react-router-dom";
import { Box, Button, Field } from "../components";
import { getVault } from "../api/vaults";
import { useEffect, useState } from "react";
import { formatUSD, formatAPY, formatAddress } from "../utils/helpers";
import steakhouseLogo from "../assets/images/steakhouse.svg";
import styles from "./Vault.module.scss";

const VaultHeader = ({ name, owner }: { name: string; owner: string }) => {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        <img src={steakhouseLogo} alt="Steakhouse logo" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.subtitle}>{formatAddress(owner)}</div>
      </div>
    </div>
  );
};

export const VaultPage = () => {
  const { vaultId } = useParams();
  const [vaultData, setVaultData] = useState<{
    id: string;
    name: string;
    totalSupply: string;
    instantNetApy: string;
    owner: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVault = async () => {
      if (!vaultId) return;
      
      try {
        const vault = await getVault(vaultId);
        setVaultData(vault);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load vault');
      } finally {
        setLoading(false);
      }
    };

    fetchVault();
  }, [vaultId]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  if (!vaultData) {
    return <Box>No vault data found</Box>;
  }

  return (
    <Box className={styles.container}>
      <VaultHeader name={vaultData.name} owner={vaultData.owner} />
      <div className={styles.divider} />
      <Field 
        title="Total Supply (USD)" 
        value={formatUSD(vaultData.totalSupply)} 
      />
      <Field 
        title="Instant Net APY" 
        value={formatAPY(vaultData.instantNetApy)} 
      />
      <Field 
        title="Vault Owner" 
        value={formatAddress(vaultData.owner)} 
      />
      <Button icon={'borrow'} />
    </Box>
  );
};
