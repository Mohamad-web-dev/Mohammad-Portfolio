import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/vazirmatn";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";

// Bootstrap 5.3's grid (row/col/g-*) uses symmetric, direction-agnostic
// spacing, so the standard build works for both RTL and LTR — direction
// is fully controlled by the `dir` attribute set in LanguageContext.
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import { LanguageProvider } from "./context/LanguageContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
