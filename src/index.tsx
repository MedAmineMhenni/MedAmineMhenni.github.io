import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n/i18";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import reportWebVitals from "./reportWebVitals";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#21243D",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#142850",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
