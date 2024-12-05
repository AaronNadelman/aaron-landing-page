import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.tsx";
import "./src/index.css";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
