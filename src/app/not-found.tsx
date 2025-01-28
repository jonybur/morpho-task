'use client';

import { useRouter } from 'next/navigation';
import { Button, Icon } from '../components';
import { useTranslation } from '../utils/useTranslation';
import styles from './not-found.module.scss';

export default function NotFound() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleTryAgain = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <Icon name="info" width={20} height={20} />
          <div className={styles.title}>{t.notFound.title}</div>
        </div>
        <div className={styles.description}>{t.notFound.description}</div>
      </div>
      <Button
        className={styles.button}
        text={t.common.tryAgain}
        onClick={handleTryAgain}
        size="small"
      />
    </div>
  );
}
