import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./assets/styles/theme";
import router from "./router/router";
import "./index.css";

import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </ThemeProvider>
);
