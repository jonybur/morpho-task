import { Metadata } from 'next';
import { getVault } from '../../../api/vaults';
import { en } from '../../../locales/en';
import { VaultContent } from './vault';

export async function generateMetadata({
  params,
}: {
  params: { vaultId: string };
}): Promise<Metadata> {
  try {
    const vault = await getVault(params.vaultId);
    const title = en.vault.metadata.title(vault.token);
    const description = en.vault.metadata.description(vault.token, vault.company);

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

export default async function VaultPage({ params }: { params: { vaultId: string } }) {
  try {
    const vault = await getVault(params.vaultId);
    return <VaultContent vault={vault} />;
  } catch {
    return <VaultContent error={true} />;
  }
}
