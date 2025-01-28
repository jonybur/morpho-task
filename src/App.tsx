import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchPage } from './app/(routes)/search/Search';
import { VaultContent } from './app/(routes)/vault/[vaultId]/vault';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/vault/:vaultId" element={<VaultContent vault={null} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
