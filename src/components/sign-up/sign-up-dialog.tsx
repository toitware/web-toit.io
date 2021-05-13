import { createStyles, Dialog, DialogTitle, makeStyles, Theme, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useCallback } from "react";
import { useSignUp } from "./context";
import SignUpForm from "./sign-up-form";
import SignUpSuccess from "./sign-up-success";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      boxShadow: "none",
      border: "2px solid black",
    },
    actions: {
      padding: theme.spacing(2),
    },
    title: {
      color: theme.palette.text.primary,
      margin: "1rem 0",
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
    <Dialog
      fullScreen={fullScreen}
      open={state.open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle id="responsive-dialog-title" disableTypography>
        <h2 className={classes.title}>Try for free</h2>
      </DialogTitle>{" "}
      {!state.sentSuccessfully && <SignUpForm handleClose={handleClose} handleSuccess={handleSuccess} />}
      {state.sentSuccessfully && <SignUpSuccess handleClose={handleClose} />}
    </Dialog>
  );
}

export default SignUpDialog;
