import { makeStyles } from "@material-ui/core/styles";
import { CITY_ITEM_WIDTH, CITY_ITEM_HEIGHT } from "../HomePage/constants";
import { Theme } from "../../theme";

export const useStyles = makeStyles<Theme, { id: string; activeCity: string | null }>(theme => ({
  container: {
    width: `${CITY_ITEM_WIDTH}px`,
    height: `${CITY_ITEM_HEIGHT}px`,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    margin: theme.spacing(3, 3),
    backgroundColor: theme.palette.background.paper,
    filter: ({ id, activeCity }) =>
      activeCity === null ? "brightness(1)" : activeCity === id ? "brightness(1.2)" : "blur(2px)",
    transition: "filter 250ms ease-in",
  },
  text: {
    marginLeft: theme.spacing(2),
  },
}));
