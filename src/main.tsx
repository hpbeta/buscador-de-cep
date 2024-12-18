import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./home.jsx";
import { GlobalStyles } from "./global-styles/globalStyles.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>
);
