import { Theme } from "../../../../theme";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingRight: theme.spacing(3),
  },
  title: {
    margin: theme.spacing(2, 0),
  },
}));
