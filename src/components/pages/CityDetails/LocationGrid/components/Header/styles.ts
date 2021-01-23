import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../../../../../theme";

export const useStyles = makeStyles<Theme, { isSticky: boolean }>(theme => ({
  container: ({ isSticky }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1120px",
    margin: theme.spacing(0, "auto", 4, "auto"),
    backgroundColor: theme.palette.background.default,
    zIndex: 100,
    position: isSticky ? "fixed" : "initial",
    top: isSticky ? 0 : "initial",
    right: isSticky ? 0 : "initial",
    left: isSticky ? 0 : "initial",
    padding: isSticky ? theme.spacing(2) : "initial",
    borderBottom: isSticky ? `2px solid ${theme.palette.divider}` : "initial",
    transition: "all 750ms ease",
  }),
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
