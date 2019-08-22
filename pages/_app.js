import React from "react";
import App from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/rebass/theme";

class Renderer extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default Renderer;
