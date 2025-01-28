import Image from 'next/image';
import styles from '../vault.module.scss';

interface VaultHeaderProps {
  name: string;
  image: string;
  curators: string;
}

export const VaultHeader = ({ name, image, curators }: VaultHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        <Image src={image} alt={name} width={40} height={40} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.subtitle}>
          {curators.length > 50 ? `${curators.slice(0, 47)}...` : curators}
        </div>
      </div>
    </div>
  );
};
