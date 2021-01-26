import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "../../../../theme";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));
