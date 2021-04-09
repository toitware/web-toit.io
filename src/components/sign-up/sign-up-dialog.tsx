import {
  createStyles,
  Dialog,
  DialogTitle,
  makeStyles,
  Theme,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useCallback } from "react";
import { whiteBlueTheme } from "../../theme";
import { useSignUp } from "./context";
import SignUpForm from "./sign-up-form";
import SignUpSuccess from "./sign-up-success";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      padding: theme.spacing(2),
    },
    title: {
      textColor: theme.palette.text.primary,
      fontSize: "1.8rem",
    },
  })
);

function SignUpDialog(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const { state, dispatch } = useSignUp();

  const handleSuccess = useCallback(() => dispatch("sent"), [dispatch]);
  const handleClose = useCallback(() => dispatch("close"), [dispatch]);

  return (
    <ThemeProvider theme={whiteBlueTheme}>
      <Dialog fullScreen={fullScreen} open={state.open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title" disableTypography>
          <Typography variant="h1" className={classes.title}>
            Try for free
          </Typography>
        </DialogTitle>{" "}
        {!state.sentSuccessfully && <SignUpForm handleClose={handleClose} handleSuccess={handleSuccess} />}
        {state.sentSuccessfully && <SignUpSuccess handleClose={handleClose} />}
      </Dialog>
    </ThemeProvider>
  );
}

export default SignUpDialog;
