import { Theme } from "../../../../theme";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    margin: theme.spacing(8, 0),
  },
}));
