import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./style.css";
import App from "./App.jsx";
import Cursor from "./components/common/Cursor/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cursor />
    <div className="relative mx-auto border-gray-900 border-x sm:container">
      <App />
    </div>
  </StrictMode>
);
