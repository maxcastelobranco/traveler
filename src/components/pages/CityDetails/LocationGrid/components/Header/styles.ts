import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../../../../../theme";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1120px",
    margin: theme.spacing(0, "auto", 4, "auto"),
    backgroundColor: theme.palette.background.default,
    zIndex: 100,
    position: "sticky",
    top: 0,
    padding: theme.spacing(2, 0),
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
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
