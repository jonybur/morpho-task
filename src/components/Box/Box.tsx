import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Box.module.scss";

export interface BoxProps {
  children: ReactNode;
  rounded?: boolean;
  className?: string;
}

export const Box = ({ children, className, rounded }: BoxProps) => {
  return (
    <div
      className={classNames(styles.box, className, {
        [styles.rounded]: rounded,
      })}
    >
      {children}
    </div>
  );
};
