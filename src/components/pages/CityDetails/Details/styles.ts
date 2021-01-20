import { Theme } from "../../../../theme";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(theme => ({
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
    display: "flex",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(3),
  },
  descriptionContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingRight: theme.spacing(3),
  },
  categoriesContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    margin: theme.spacing(2, 0),
  },
}));
