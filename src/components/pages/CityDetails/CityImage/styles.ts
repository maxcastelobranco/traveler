import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "../../../../theme";

export const useStyles = makeStyles<Theme>({
  container: {
    width: "100vw",
    height: "50vh",
    overflow: "hidden",
  },
  image: {
    width: "100vw",
    height: "80vh",
    objectFit: "cover",
    marginTop: "-30vh",
  },
});
