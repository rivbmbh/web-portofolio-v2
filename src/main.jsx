import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./style.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto max-w-7xl dark">
      <App />
    </div>
  </StrictMode>
);
