import { Metadata } from 'next';
import { getVault } from '../../../api/vaults';
import { en } from '../../../locales/en';
import { VaultError } from './components/VaultError';
import { VaultContainer } from './vault';

export async function generateMetadata({
  params,
}: {
  params: { chainId: string; vaultAddress: string };
}): Promise<Metadata> {
  try {
    const vault = await getVault(parseInt(params.chainId, 10), params.vaultAddress);
    const title = vault.name;
    const description = vault.metadata.curators.map((c) => c.name).join(', ');

    return {
      title,
      description,
      openGraph: {
        title,
        description,
      },
    };
  } catch {
    return {
      title: en.vault.metadata.notFound.title,
      description: en.vault.metadata.notFound.description,
    };
  }
}

export default async function VaultPage({
  params,
}: {
  params: { chainId: string; vaultAddress: string };
}) {
  try {
    const vault = await getVault(parseInt(params.chainId, 10), params.vaultAddress);
    return <VaultContainer vault={vault} />;
  } catch {
    return <VaultError />;
  }
}
