import React from "react";
import styles from "./Error.module.scss";
import { Icon, Box, Button } from "../../components";

export const ErrorPage: React.FC = () => {
  return (
    <Box className={styles.box} rounded>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.titleWrapper}>
            <Icon name="info" />
            <span className={styles.title}>Oops!</span>
          </div>
          <span className={styles.description}>
            Something went wrong, please try again.
          </span>
        </div>
        <Button text="Try again" size="small" />
      </div>
    </Box>
  );
};
