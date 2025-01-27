import { DropdownItem } from "../components/Dropdown";
import { isValidEthereumAddress } from "../utils/helpers";

export type Vault = {
  id: string;
  name: string;
  token: string;
  company: string;
  totalSupply: string;
  instantNetApy: string;
  owner: string;
};

export const searchVaults = async (
  searchTerm: string,
  signal?: AbortSignal
): Promise<DropdownItem[]> => {
  const delay = (ms: number) =>
    new Promise((resolve, reject) => {
      const timeout = setTimeout(resolve, ms);
      signal?.addEventListener("abort", () => {
        clearTimeout(timeout);
        reject(new Error("Aborted"));
      });
    });

  await delay(300);

  if (searchTerm.startsWith("0x")) {
    if (!isValidEthereumAddress(searchTerm)) {
      throw new Error("This is not a valid address");
    }
  }

  if (searchTerm.toLowerCase() === "steakhouse") {
    return [
      { id: "1", name: "Vault Name One" },
      { id: "2", name: "Vault Name Two" },
      { id: "3", name: "Vault Name Three" },
      { id: "4", name: "Vault Name Four" },
    ];
  }

  if (searchTerm.length === 0) {
    return [];
  }

  throw new Error("No vault found for this name");
};

export const getVault = async (vaultId: string): Promise<Vault> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const mockVaults = [
    {
      id: "1",
      name: "Vault Name One",
      token: "Steakhouse USDC",
      company: "Steakhouse Financial",
      totalSupply: "52250000",
      instantNetApy: "10.22%",
      owner: "0x12300000000000000000000000000000000abcdef",
    },
    {
      id: "2",
      name: "Vault Name Two",
      token: "Steakhouse USDC",
      company: "Steakhouse Financial",
      totalSupply: "52250000",
      instantNetApy: "10.22%",
      owner: "0x12300000000000000000000000000000000abcdef",
    },
    {
      id: "3",
      name: "Vault Name Three",
      token: "Steakhouse USDC",
      company: "Steakhouse Financial",
      totalSupply: "52250000",
      instantNetApy: "10.22%",
      owner: "0x12300000000000000000000000000000000abcdef",
    },
    {
      id: "4",
      name: "Vault Name Four",
      token: "Steakhouse USDC",
      company: "Steakhouse Financial",
      totalSupply: "52250000",
      instantNetApy: "10.22%",
      owner: "0x12300000000000000000000000000000000abcdef",
    },
  ];

  const vault = mockVaults.find((v) => v.id === vaultId);

  if (!vault) {
    throw new Error("Vault not found");
  }

  return vault;
};
