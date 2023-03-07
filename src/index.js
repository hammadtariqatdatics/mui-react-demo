import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Theme from "./theme/Theme";
import { AxiosInterceptors } from "./utils/Axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <AxiosInterceptors>
          <App />
        </AxiosInterceptors>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
