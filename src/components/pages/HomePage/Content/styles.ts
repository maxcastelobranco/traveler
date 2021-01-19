import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1120px",
    margin: "0 auto",
    padding: theme.spacing(0, 3),
  },
}));
