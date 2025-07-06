import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./style.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container px-8 mx-auto">
      <App />
    </div>
  </StrictMode>
);
