import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../../../theme";
import { createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(5),
    },
  })
);
