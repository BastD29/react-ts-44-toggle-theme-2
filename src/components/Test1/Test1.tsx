import { FC } from "react";

import { useTheme } from "../../hooks/useTheme";

import styles from "./Test1.module.scss";

const Test1: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles["test-1"]} ${styles[theme]}`}>
      <h1>Test 1</h1>
    </div>
  );
};

export default Test1;
