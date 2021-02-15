import { makeStyles } from "@material-ui/styles";
import { createStyles } from "@material-ui/core";
import { Theme } from "../../../../../theme";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2, 0),
      borderBottom: `2px solid ${theme.palette.divider}`,
      "& > div": {
        display: "flex",
        alignItems: "center",
        "& > svg": {
          margin: theme.spacing(0, 1, 0, 2),
        },
      },
    },
  })
);
