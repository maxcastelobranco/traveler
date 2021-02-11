import { AppProps } from "next/app";
import { NextPage } from "next";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Head from "next/head";
import React from "react";

const Traveler: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider {...{ theme }}>
      <Head>
        <title>Traveler</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Traveler;
