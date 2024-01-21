import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import router from "./router/router";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CookiesProvider>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
    </CookiesProvider>
  </ThemeProvider>
);
