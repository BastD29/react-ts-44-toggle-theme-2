import { FC } from "react";

import Test1 from "../Test1/Test1";
import Test2 from "../Test2/Test2";

import { useTheme } from "../../hooks/useTheme";

const App: FC = ({}) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Test1 />
      <Test2 />
    </div>
  );
};

export default App;
