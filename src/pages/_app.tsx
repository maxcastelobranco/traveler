import { AppProps } from "next/app";
import { NextPage } from "next";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

const Traveler: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Traveler;
