import { makeStyles } from "@material-ui/styles";
import { createStyles } from "@material-ui/core";
import { Theme } from "../../../../../theme";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& > article": {
        display: "flex",
        flexDirection: "column",
        paddingBottom: theme.spacing(2),
        borderBottom: `2px solid ${theme.palette.divider}`,
        "& div": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(1, 0),
          "& svg": {
            fill: theme.palette.secondary.main,
          },
        },
      },
      "& + div": {
        marginTop: theme.spacing(2),
      },
    },
    avatar: {
      width: 64,
      height: 64,
      marginRight: theme.spacing(3),
    },
  })
);
