import { makeStyles } from "@material-ui/styles";
import { createStyles } from "@material-ui/core";
import { Theme } from "../../../../../theme";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      position: "sticky",
      top: 0,
      zIndex: theme.zIndex.appBar,
      backgroundColor: theme.palette.common.white,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(4),
      "& > div": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      "& > div:first-child": {
        marginRight: theme.spacing(8),
        "& > svg": {
          margin: theme.spacing(0, 1, 0, 3),
        },
      },
    },
    commentContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: theme.spacing(3),
      borderBottom: `2px solid ${theme.palette.divider}`,
      "& > article": {
        display: "flex",
        flexDirection: "column",
        "& svg": {
          fill: theme.palette.secondary.main,
        },
      },
      "& + div": {
        marginTop: theme.spacing(2),
      },
    },
    avatar: {
      width: 96,
      height: 96,
      marginRight: theme.spacing(3),
    },
  })
);
