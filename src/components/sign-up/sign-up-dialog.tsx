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
import React, { useCallback, useEffect, useState } from "react";
import { whiteBlueTheme } from "../theme";
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

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleSuccess = useCallback(() => setSubmitSuccess(true), []);

  const { state, dispatch } = useSignUp();

  const handleClose = useCallback(() => {
    dispatch({ type: "close" });
  }, [dispatch]);

  useEffect(() => {
    if (state.open && submitSuccess) {
      // Make sure that the form (and not the success message) is shown
      // everytime the dialog appears.
      setSubmitSuccess(false);
    }
  }, [state.open]);

  return (
    <ThemeProvider theme={whiteBlueTheme}>
      <Dialog fullScreen={fullScreen} open={state.open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title" disableTypography>
          <Typography variant="h1" className={classes.title}>
            Try it Free
          </Typography>
        </DialogTitle>{" "}
        {!submitSuccess && <SignUpForm handleClose={handleClose} handleSuccess={handleSuccess} />}
        {submitSuccess && <SignUpSuccess handleClose={handleClose} />}
      </Dialog>
    </ThemeProvider>
  );
}

export default SignUpDialog;
