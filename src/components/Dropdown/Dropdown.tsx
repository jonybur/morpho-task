'use client';

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import styles from './Dropdown.module.scss';

export interface DropdownItem {
  id: string;
  name: string;
}

interface DropdownProps {
  items: DropdownItem[];
  visible: boolean;
  onClose: () => void;
  onSelect: (item: DropdownItem) => void;
}

export const Dropdown: FC<DropdownProps> = ({ items, visible, onClose, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!visible || items.length === 0) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex((prev) => {
            if (prev === null) return 0;
            return (prev + 1) % items.length;
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex((prev) => {
            if (prev === null) return items.length - 1;
            return (prev - 1 + items.length) % items.length;
          });
          break;
        case 'Enter':
          event.preventDefault();
          if (selectedIndex !== null) {
            onSelect(items[selectedIndex]);
            onClose();
          }
          break;
        case 'Escape':
          event.preventDefault();
          onClose();
          break;
      }
    },
    [visible, items, selectedIndex, onSelect, onClose]
  );

  useEffect(() => {
    if (visible) {
      setSelectedIndex(null);
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, items, handleClickOutside, handleKeyDown]);

  if (!visible) return null;

  return (
    <div className={`${styles.dropdown} morpho-dropdown`} ref={dropdownRef}>
      <div className={styles.content}>
        {items.length === 0 ? (
          <div className={styles.noResults}>No results :(</div>
        ) : (
          items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.item} ${index === selectedIndex ? styles.selected : ''}`}
              onClick={() => {
                onSelect(item);
                onClose();
              }}
            >
              <div className={styles.itemContent}>
                <div className={styles.avatar} />
                <span className={styles.name}>{item.name}</span>
              </div>
              <Icon name="arrow" className={styles.arrow} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
