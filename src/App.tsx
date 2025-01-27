import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { NotFoundPage, SearchPage, VaultPage } from './pages';

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
