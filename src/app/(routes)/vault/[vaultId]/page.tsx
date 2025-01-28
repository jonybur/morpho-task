import { getVault } from '../../../../api/vaults';
import { VaultContent } from './vault';

export default async function VaultRoute({ params }: { params: { vaultId: string } }) {
  try {
    const vault = await getVault(params.vaultId);
    return <VaultContent vault={vault} />;
  } catch {
    return <VaultContent error />;
  }
} 