import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
