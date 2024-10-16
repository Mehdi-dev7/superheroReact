// Les dependances
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Les composants  (ils portent une MAJ)
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
