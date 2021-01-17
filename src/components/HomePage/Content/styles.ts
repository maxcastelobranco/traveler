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
