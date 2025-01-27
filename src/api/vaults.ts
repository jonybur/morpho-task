import { DropdownItem } from '../components/Dropdown';
import { isValidEthereumAddress } from '../utils/helpers';

export const searchVaults = async (searchTerm: string, signal?: AbortSignal): Promise<DropdownItem[]> => {
  const delay = (ms: number) => new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(timeout);
      reject(new Error('Aborted'));
    });
  });

  await delay(300);
  
  if (searchTerm.startsWith('0x')) {
    if (!isValidEthereumAddress(searchTerm)) {
      throw new Error('This is not a valid address');
    }
  }
  
  if (searchTerm.toLowerCase() === 'steakhouse') {
    return [
      { id: '1', name: 'Vault Name One' },
      { id: '2', name: 'Vault Name Two' },
      { id: '3', name: 'Vault Name Three' },
      { id: '4', name: 'Vault Name Four' },
    ];
  }

  if (searchTerm.length === 0) {
    return [];
  }
  
  throw new Error('No vault found for this name');
};

export const getVault = async (vaultId: string): Promise<{
  id: string;
  name: string;
  totalSupply: string;
  instantNetApy: string;
  owner: string;
}> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const mockVaults = [
    { id: '1', name: 'Vault Name One', totalSupply: "52250000", instantNetApy: "10.22%", owner: "0x12300000000000000000000000000000000abcdef" },
    { id: '2', name: 'Vault Name Two', totalSupply: "52250000", instantNetApy: "10.22%", owner: "0x12300000000000000000000000000000000abcdef" },
    { id: '3', name: 'Vault Name Three', totalSupply: "52250000", instantNetApy: "10.22%", owner: "0x12300000000000000000000000000000000abcdef" },
    { id: '4', name: 'Vault Name Four', totalSupply: "52250000", instantNetApy: "10.22%", owner: "0x12300000000000000000000000000000000abcdef" },
  ];

  const vault = mockVaults.find((v) => v.id === vaultId);
  
  if (!vault) {
    throw new Error('Vault not found');
  }

  return vault;
}; 