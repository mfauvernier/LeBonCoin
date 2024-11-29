import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import FavProvider from "./contexts/FavContext.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <FavProvider>
        <App />
      </FavProvider>
    </ThemeProvider>
  </StrictMode>,
);
