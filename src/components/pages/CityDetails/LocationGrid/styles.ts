import { Theme } from "../../../../theme";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    margin: theme.spacing(8, 0),
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  categoryButton: {
    transition: "color 500ms ease-in-out",
    margin: theme.spacing(0, 2),
  },
  underline: {
    position: "absolute",
    bottom: -theme.spacing(2) - 1,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
  },
}));
