import { Theme } from "../../../../theme";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme, { id: string; activeLocation: string | null }>(
  theme => ({
    container: {
      cursor: "pointer",
      marginTop: theme.spacing(2),
      background: theme.palette.common.white,
      border: `2px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      position: "relative",
      filter: ({ id, activeLocation }) =>
        activeLocation === null ? "unset" : activeLocation === id ? "unset" : "blur(2px)",
      transition: "filter 250ms ease",
    },
    ratingContainer: {
      position: "absolute",
      top: -theme.spacing(2),
      left: theme.spacing(2),
      zIndex: 10,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius / 2,
      color: theme.palette.common.white,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    borderRadius: {
      borderTopRightRadius: theme.shape.borderRadius,
      borderTopLeftRadius: theme.shape.borderRadius,
    },
    typographyContainer: {
      padding: theme.spacing(2),
    },
    title: {
      paddingBottom: theme.spacing(1),
      borderBottom: `2px solid ${theme.palette.divider}`,
    },
    categoryContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(1, 0),
    },
  })
);
