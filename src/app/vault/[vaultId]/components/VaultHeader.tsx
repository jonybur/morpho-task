import Image from 'next/image';
import steakhouseLogo from '../../../../assets/images/steakhouse.svg';
import styles from '../vault.module.scss';

interface VaultHeaderProps {
  token: string;
  company: string;
}

export const VaultHeader = ({ token, company }: VaultHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        <Image src={steakhouseLogo} alt="Steakhouse logo" width={40} height={40} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{token}</div>
        <div className={styles.subtitle}>{company}</div>
      </div>
    </div>
  );
};
