import { Vault as VaultType } from '../../../../api/vaults';
import { Field } from '../../../../components';
import { en } from '../../../../locales/en';
import { formatAddress, formatAPY, formatUSD } from '../../../../utils/helpers';
import styles from '../vault.module.scss';
import { VaultHeader } from './VaultHeader';

const getExplorerUrl = (chainId: number, address: string) => {
  return chainId === 1
    ? `https://etherscan.io/address/${address}`
    : `https://basescan.org/address/${address}`;
};

export function VaultContent({ vault }: { vault: VaultType }) {
  const explorerUrl = getExplorerUrl(vault.chainId, vault.state.owner);

  return (
    <div className={styles.content}>
      <VaultHeader
        name={vault.name}
        image={vault.metadata.image}
        curators={vault.metadata.curators.map((c) => c.name).join(', ')}
      />
      <div className={styles.divider} />
      <Field title={en.vault.fields.totalSupply} value={formatUSD(vault.state.totalAssetsUsd)} />
      <Field title={en.vault.fields.instantNetApy} value={formatAPY(vault.state.netApy)} />
      <Field
        title={en.vault.fields.vaultOwner}
        value={formatAddress(vault.state.owner)}
        href={explorerUrl}
      />
    </div>
  );
}
