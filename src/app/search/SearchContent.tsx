'use client';

import { useState } from 'react';
import { Box, Select } from '@/components';
import { useTranslation } from '@/utils/useTranslation';
import { useRouter } from 'next/navigation';
import { isAddress } from 'viem';
import { DropdownItem } from '@/components/Dropdown';
import { searchVaults } from '@/api/vaults';
import styles from './page.module.scss';

const MAX_SEARCH_LENGTH = 42;

export function SearchContent() {
  const router = useRouter();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (value: string) => {
    setSearchTerm(value.slice(0, MAX_SEARCH_LENGTH));
  };

  const handleSearch = async (term: string, signal?: AbortSignal) => {
    if (term.length === 0) {
      return [];
    }

    if (term.startsWith('0x') && !isAddress(term)) {
      setError(true);
      setErrorMessage('Invalid Ethereum address');
      return [];
    }

    try {
      const results = await searchVaults(term);
      if (!signal?.aborted) {
        setError(false);
        setErrorMessage('');
        return results;
      }
      return [];
    } catch (err) {
      if (!signal?.aborted) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
        }
        setError(true);
      }
      return [];
    }
  };

  const handleSelect = (item: DropdownItem) => {
    const [chainId, address] = item.id.split(':');
    router.push(`/${chainId}/${address}`);
  };

  return (
    <Box className={styles.searchContainer}>
      <div className={styles.searchForm}>
        <h6>{t.search.title}</h6>
        <Select
          placeholder={t.search.placeholder}
          value={searchTerm}
          onChange={handleChange}
          onSearch={handleSearch}
          onSelect={handleSelect}
          isError={error}
          errorMessage={errorMessage}
        />
      </div>
    </Box>
  );
}
