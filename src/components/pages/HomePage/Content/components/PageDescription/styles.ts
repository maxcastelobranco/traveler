import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  description: {
    marginBottom: theme.spacing(4),
  },
  button: {
    padding: theme.spacing(2, 4, 2, 4),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));
