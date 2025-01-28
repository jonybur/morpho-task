'use client';

import { useRouter } from 'next/navigation';
import { Button, Icon } from '../components';
import styles from './not-found.module.scss';

export default function NotFound() {
  const router = useRouter();

  const handleTryAgain = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <Icon name="info" width={20} height={20} />
          <div className={styles.title}>Not found</div>
        </div>
        <div className={styles.description}>We could not find the page you were looking for.</div>
      </div>
      <Button className={styles.button} text="Try again" onClick={handleTryAgain} size="small" />
    </div>
  );
}
