'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from '../../utils/debounce';
import { Dropdown, DropdownItem } from '../Dropdown';
import { Input } from '../Input';
import styles from './Select.module.scss';

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (searchTerm: string, signal?: AbortSignal) => Promise<DropdownItem[]>;
  onSelect?: (item: DropdownItem) => void;
  placeholder?: string;
  className?: string;
  isError?: boolean;
  errorMessage?: string;
}

export const Select = ({
  value,
  onChange,
  onSearch,
  onSelect,
  placeholder,
  className,
  isError,
  errorMessage,
}: SelectProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DropdownItem[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const debouncedSearch = useCallback(
    async (searchTerm: string) => {
      const results = await onSearch(searchTerm);
      return results;
    },
    [onSearch]
  );

  const debouncedSearchWithDelay = useMemo(() => debounce(debouncedSearch, 300), [debouncedSearch]);

  useEffect(() => {
    if (value.length === 0) {
      setResults([]);
      setHasSearched(false);
      setIsSuccess(false);
      return;
    }

    let abortController: AbortController | null = null;

    setIsLoading(true);
    setResults([]);
    setIsSuccess(false);

    abortController = new AbortController();
    debouncedSearchWithDelay(value)
      .then((newResults) => {
        if (!abortController?.signal.aborted) {
          setResults(newResults);
          setHasSearched(true);
          setIsSuccess(newResults.length > 0);
        }
      })
      .catch(() => {
        // Ignore errors as they are handled by the onSearch function
      })
      .finally(() => {
        if (!abortController?.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => {
      abortController?.abort();
    };
  }, [value, debouncedSearchWithDelay]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsSuccess(false);
  };

  const handleSelect = (item: DropdownItem) => {
    onChange(item.name);
    setResults([]);
    setHasSearched(false);
    setIsSuccess(true);
    onSelect?.(item);
  };

  const shouldShowDropdown = value.length > 0 && !isLoading && hasSearched;

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onFocus={() => {
          if (value.length > 0 && !isLoading) {
            handleInputChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>);
          }
        }}
        isLoading={isLoading}
        error={!isLoading && isError}
        success={!isLoading && !isError && isSuccess}
      />
      <div
        className={`${styles.dropdownContainer} ${!isLoading && isError ? styles.errorSpacing : ''}`}
      >
        {!isLoading && isError && (
          <span className={styles.errorText}>{errorMessage || 'Error'}</span>
        )}
        <Dropdown
          items={results}
          visible={shouldShowDropdown}
          onClose={() => {
            setResults([]);
            setHasSearched(false);
          }}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};
