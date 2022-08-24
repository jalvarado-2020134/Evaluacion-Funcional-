import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contexto from "./context/Contexto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Contexto>
    <App />
  </Contexto>
);
