import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "../../../../theme";

export const useStyles = makeStyles<Theme>(theme => ({
  container: { display: "flex", flex: 0.6 },
  button: {
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));
