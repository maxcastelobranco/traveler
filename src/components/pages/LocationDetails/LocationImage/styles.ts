import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../../../theme";

export const useStyles = makeStyles<Theme>(theme => ({
  image: {
    width: "50vw",
    height: "70vh ",
    objectFit: "cover",
    boxShadow: theme.shadows[3],
  },
}));
