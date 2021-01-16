import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "../../theme";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    maxWidth: "1120px",
    margin: "0 auto",
  },
  goToLoginButton: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));
