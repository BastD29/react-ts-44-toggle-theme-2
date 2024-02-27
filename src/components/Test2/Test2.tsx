import { FC } from "react";

import { useTheme } from "../../hooks/useTheme";

import styles from "./Test2.module.scss";

const Test2: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles["test-2"]} ${styles[theme]}`}>
      <h1>Test 2</h1>
    </div>
  );
};

export default Test2;
