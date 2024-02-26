import { FC } from "react";

import styles from "./Test1.module.scss";

const Test1: FC = () => {
  return (
    <div className={styles["test-1"]}>
      <h1>Test 1</h1>
    </div>
  );
};

export default Test1;
