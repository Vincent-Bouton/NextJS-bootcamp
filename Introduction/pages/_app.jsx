//DATE : 10/1/20

import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
