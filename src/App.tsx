import { useState } from 'react';
import { Box, Navbar, Select } from './components'
import { DropdownItem } from './components/Dropdown';

const isValidEthereumAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

const mockApiCall = async (searchTerm: string, signal?: AbortSignal): Promise<DropdownItem[]> => {
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

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (term: string, signal?: AbortSignal) => {
    try {
      const results = await mockApiCall(term, signal);
      if (!signal?.aborted) {
        setError(false);
        setErrorMessage('');
        return results;
      }
      return [];
    } catch (err) {
      if (signal?.aborted) return [];
      if (err instanceof Error) {
        setErrorMessage(err.message);
      }
      setError(true);
      return [];
    }
  };

  return (
    <>
      <Navbar />
      <Box>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h6>Vault Address or Name</h6>
          <Select 
            placeholder='Enter Vault Address or Name...'
            value={searchTerm}
            onChange={setSearchTerm}
            onSearch={handleSearch}
            isError={error}
            errorMessage={errorMessage}
          />
        </div>
      </Box>
    </>
  );
}

export default App
