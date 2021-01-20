import { Theme } from "../../../../theme";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.divider}`,
  },
  iconContainer: {
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
}));
