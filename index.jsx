import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/components/App/App";

import "modern-normalize"; // импорт библ модерн нормалайз
import "./index.css"; // импорт обнуленного css

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
