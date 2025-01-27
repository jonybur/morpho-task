import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VaultPage, NotFoundPage, SearchPage } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/vault/:vaultId" element={<VaultPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
