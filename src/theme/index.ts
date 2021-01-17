import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          maxHeight: "100vh",
          maxWidth: "100vw",
          padding: 0,
          overflow: "hidden",
        },
      },
    },
  },
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
      fontSize: "5rem",
    },
    h2: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "3.375rem",
    },
    h3: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h5: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: "1rem",
    },
    subtitle2: {
      fontFamily: "Heebo",
      fontWeight: 500,
      fontSize: "1rem",
    },
    body1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: "1.25rem",
    },
    body2: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: "1rem",
    },
    button: {
      fontFamily: "Heebo",
      fontWeight: 500,
      fontSize: "1.125rem",
    },
    caption: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export type Theme = typeof theme;

theme = responsiveFontSizes(theme, {
  factor: 3,
  disableAlign: true,
});
export default theme;
