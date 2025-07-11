import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routers/routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>
);
