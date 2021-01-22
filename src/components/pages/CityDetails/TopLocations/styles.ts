import { Theme } from "../../../../theme";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(8, 0),
  },
  locationsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: theme.spacing(2, 0),
  },
}));
