import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./style.css";
import App from "./App.jsx";
import Cursor from "./components/common/Cursor/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cursor />
    <div className="relative px-8 mx-auto overflow-x-hidden sm:px-4 sm:container md:px-8">
      <App />
    </div>
  </StrictMode>
);
