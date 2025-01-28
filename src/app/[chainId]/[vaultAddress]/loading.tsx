import { Box } from '@/components';
import styles from './vault.module.scss';

export default function VaultLoading() {
  return (
    <Box className={styles.container} rounded>
      <div className={styles.content}>
        <div className={`${styles.header} animate-pulse`}>
          <div className={styles.avatar}>
            <div className="w-[66px] h-[66px] rounded-full bg-gray-200" />
          </div>
          <div className={styles.info}>
            <div className="h-7 w-40 bg-gray-200 rounded" />
            <div className="h-6 w-32 bg-gray-200 rounded mt-2" />
          </div>
        </div>
        <div className={styles.divider} />
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse space-y-2">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-6 w-24 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
    </Box>
  );
}
