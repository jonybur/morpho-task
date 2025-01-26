import { useState } from 'react';
import { Box, Input, Navbar, Dropdown } from './components'

const mockVaults = [
  { id: '1', name: 'Vault Name One' },
  { id: '2', name: 'Vault Name Two' },
  { id: '3', name: 'Vault Name Three' },
  { id: '4', name: 'Vault Name Four' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredVaults = mockVaults.filter(vault => 
    vault.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Box>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "relative" }}>
          <h6>Vault Address</h6>
          <Input 
            placeholder='Enter Vault Address or Name...' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dropdown 
            items={filteredVaults} 
            visible={searchTerm.length > 0 && filteredVaults.length > 0} 
          />
        </div>
      </Box>
    </>
  )
}

export default App
