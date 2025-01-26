import { FC } from 'react';
import styles from './Dropdown.module.scss';
import { Icon } from '../Icon';

export interface DropdownItem {
  id: string;
  name: string;
}

interface DropdownProps {
  items: DropdownItem[];
  visible: boolean;
}

export const Dropdown: FC<DropdownProps> = ({ items, visible }) => {
  if (!visible) return null;

  return (
    <div className={styles.dropdown}>
      <div className={styles.content}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.itemContent}>
              <div className={styles.avatar} />
              <span className={styles.name}>{item.name}</span>
            </div>
            <Icon name="arrow" className={styles.arrow} />
          </div>
        ))}
      </div>
    </div>
  );
}; 