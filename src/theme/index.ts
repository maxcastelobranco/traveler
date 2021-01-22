import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          scrollbarWidth: "thin",
          scrollbarColor: "#115D8C #92cdf2",
        },
        body: {
          maxWidth: "100vw",
          overflowX: "hidden",
          padding: 0,
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
    divider: "#DCE2E5",
  },
  typography: {
    h1: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "5rem", // 80
    },
    h2: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "3.375rem", // 54
    },
    h3: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "2.5rem", // 40
    },
    h4: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "2.25rem", // 36
    },
    h5: {
      fontFamily: "Barlow",
      fontWeight: 600,
      fontSize: "1.25rem", // 20
    },
    subtitle1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: "1rem", // 16
    },
    subtitle2: {
      fontFamily: "Heebo",
      fontWeight: 500,
      fontSize: "1rem", // 16
    },
    body1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: "1.25rem", // 20
    },
    body2: {
      fontFamily: "Heebo",
      fontWeight: 400,
      fontSize: "1rem", // 16
    },
    button: {
      fontFamily: "Heebo",
      fontWeight: 500,
      fontSize: "1rem", // 16
    },
    caption: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "1rem", // 16
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
