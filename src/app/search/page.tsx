'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { searchVaults } from '@/api/vaults';
import { Box, Select } from '@/components';
import { DropdownItem } from '@/components/Dropdown';
import styles from './page.module.scss';

export default function SearchPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (term: string, signal?: AbortSignal) => {
    try {
      const results = await searchVaults(term, signal);
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

  const handleSelect = (item: DropdownItem) => {
    router.push(`/vault/${item.id}`);
  };

  return (
    <Box className={styles.searchContainer}>
      <div className={styles.searchForm}>
        <h6>Vault Address or Name</h6>
        <Select
          placeholder="Enter Vault Address or Name..."
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearch}
          onSelect={handleSelect}
          isError={error}
          errorMessage={errorMessage}
        />
      </div>
    </Box>
  );
} 