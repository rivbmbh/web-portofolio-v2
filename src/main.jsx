import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./style.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="px-8 mx-auto sm:px-4 sm:container md:px-8">
      <App />
    </div>
  </StrictMode>
);
