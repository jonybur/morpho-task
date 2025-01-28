import { gql } from '@apollo/client';
import { isAddress } from 'viem';
import { DropdownItem } from '../components/Dropdown';
import { client } from './graphql';

export type Vault = {
  address: string;
  chainId: number;
  name: string;
  metadata: {
    image: string;
    curators: { name: string }[];
  };
  state: {
    owner: string;
    totalAssetsUsd: string;
    netApy: string;
  };
};

type VaultSearchResult = {
  address: string;
  chain: {
    id: number;
  };
  metadata: {
    image: string;
  };
  name: string;
};

const SEARCH_VAULTS_BY_NAME = gql`
  query VaultSearchByName($search: String!) {
    vaults(first: 10, where: { whitelisted: true, search: $search }) {
      items {
        address
        chain {
          id
        }
        metadata {
          image
        }
        name
      }
    }
  }
`;

const SEARCH_VAULTS_BY_ADDRESS = gql`
  query VaultSearchByFullAddress($address: [String!]!) {
    vaults(first: 10, where: { whitelisted: true, address_in: $address }) {
      items {
        address
        chain {
          id
        }
        metadata {
          image
        }
        name
      }
    }
  }
`;

const GET_VAULT_DATA = gql`
  query VaultData($address: String!, $chainId: Int!) {
    vaultByAddress(address: $address, chainId: $chainId) {
      metadata {
        image
        curators {
          name
        }
      }
      name
      state {
        owner
        totalAssetsUsd
        netApy
      }
    }
  }
`;

export const searchVaults = async (searchTerm: string): Promise<DropdownItem[]> => {
  if (searchTerm.length === 0) {
    return [];
  }

  try {
    if (searchTerm.startsWith('0x')) {
      if (!isAddress(searchTerm)) {
        throw new Error('This is not a valid address');
      }

      const { data } = await client.query({
        query: SEARCH_VAULTS_BY_ADDRESS,
        variables: { address: [searchTerm] },
      });

      return data.vaults.items.map((vault: VaultSearchResult) => ({
        id: `${vault.chain.id}:${vault.address}`,
        name: vault.name,
        image: vault.metadata.image,
      }));
    }

    const { data } = await client.query({
      query: SEARCH_VAULTS_BY_NAME,
      variables: { search: searchTerm },
    });

    return data.vaults.items.map((vault: VaultSearchResult) => ({
      id: `${vault.chain.id}:${vault.address}`,
      name: vault.name,
      image: vault.metadata.image,
    }));
  } catch {
    throw new Error('No vault found for this name');
  }
};

export const getVault = async (chainId: number, address: string): Promise<Vault> => {
  const { data } = await client.query({
    query: GET_VAULT_DATA,
    variables: { address, chainId },
  });

  if (!data.vaultByAddress) {
    throw new Error('Vault not found');
  }

  return {
    address,
    chainId,
    ...data.vaultByAddress,
  };
};
