import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#115D8C",
    },
    secondary: {
      main: "#F25D27",
    },
    text: {
      primary: "#123952",
      secondary: "#617480",
      hint: "#A0ACB2",
    },
    background: {
      default: "#F5F8FA",
      paper: "#DDE9F0",
    },
    error: {
      main: "#DE3838",
    },
    success: {
      main: "#51B853",
    },
  },
  typography: {
    h1: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: 80,
    },
    h2: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: 54,
    },
    h3: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: 40,
    },
    h4: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: 36,
    },
    h5: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: 20,
    },
    subtitle1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: "Heebo",
      fontWeight: 500,
      fontSize: 16,
    },
    body1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: 20,
    },
    body2: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: 16,
    },
    button: {
      fontFamily: "Heebo",
      fontWeight: 500,
      fontSize: 18,
      textTransform: "capitalize",
    },
  },
});

export type Theme = typeof theme;

export default theme;
