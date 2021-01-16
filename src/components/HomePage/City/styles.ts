import { makeStyles } from "@material-ui/core/styles";
import { CITY_ITEM_WIDTH, CITY_ITEM_HEIGHT } from "../constants";

export const useStyles = makeStyles(theme => ({
  container: {
    width: `${CITY_ITEM_WIDTH}px`,
    height: `${CITY_ITEM_HEIGHT}px`,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    margin: theme.spacing(3, 0),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
  },
  text: {
    marginLeft: theme.spacing(2),
  },
}));
