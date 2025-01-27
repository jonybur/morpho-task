import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../../components';
import styles from './NotFound.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate('/');
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
};
