import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "../../theme";

export const useStyles = makeStyles<Theme, { boxShadow?: boolean; backgroundColor?: string }>(
  theme =>
    createStyles({
      container: {
        backgroundColor: ({ backgroundColor }) => (backgroundColor ? backgroundColor : "unset"),
        boxShadow: ({ boxShadow }) => (boxShadow ? theme.shadows[1] : "none"),
      },
      buttonsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(3),
        maxWidth: "1120px",
        margin: "0 auto",
      },
      goToLoginButton: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
      },
      goBackButton: {
        marginLeft: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
      },
    })
);
