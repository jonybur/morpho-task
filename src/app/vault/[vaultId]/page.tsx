import { Metadata } from 'next'
import { getVault } from '../../../api/vaults'
import { VaultContent } from './vault'

export async function generateMetadata({ params }: { params: { vaultId: string } }): Promise<Metadata> {
  try {
    const vault = await getVault(params.vaultId)
    return {
      title: `${vault.token} Vault`,
      description: `Explore ${vault.token} vault by ${vault.company}`,
      openGraph: {
        title: `${vault.token} Vault`,
        description: `Explore ${vault.token} vault by ${vault.company}`,
      },
    }
  } catch {
    return {
      title: 'Vault Not Found',
      description: 'The requested vault could not be found',
    }
  }
}

export default async function VaultPage({ params }: { params: { vaultId: string } }) {
  try {
    const vault = await getVault(params.vaultId)
    return <VaultContent vault={vault} />
  } catch {
    return <VaultContent error={true} />
  }
}