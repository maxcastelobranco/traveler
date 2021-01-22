import { Theme } from "../../../../theme";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
    display: "flex",
  },
  contentContainer: {
    margin: theme.spacing(3),
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  categoriesContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
