import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../../../theme";
import { createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      padding: theme.spacing(5),
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    iconContainer: {
      position: "absolute",
      top: 16,
      right: 16,
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
      padding: theme.spacing(2),
    },
  })
);
