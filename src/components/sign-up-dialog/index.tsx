import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Theme,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { whiteBlueTheme } from "../theme";
import SignUpForm from "./sign-up-form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      padding: theme.spacing(2),
    },

    title: {
      textColor: theme.palette.text.primary,
      fontSize: "1.8rem",
    },
    successCheckmark: {
      width: "4rem",
      height: "4rem",
      display: "block",
      margin: "0 auto 3rem",
      color: theme.palette.success.main,
    },
  })
);

type SignUpDialogProps = {
  open: boolean;
  handleClose: () => void;
};

function SignUpDialog({ open, handleClose }: SignUpDialogProps): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleSuccess = useCallback(() => setSubmitSuccess(true), []);

  useEffect(() => {
    if (open && submitSuccess) {
      // Make sure that the form (and not the success message) is shown
      // everytime the dialog appears.
      setSubmitSuccess(false);
    }
  }, [open]);

  return (
    <ThemeProvider theme={whiteBlueTheme}>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title" disableTypography>
          <Typography variant="h1" className={classes.title}>
            Try it Free
          </Typography>
        </DialogTitle>{" "}
        {!submitSuccess && <SignUpForm handleClose={handleClose} handleSuccess={handleSuccess} />}
        {submitSuccess && <SuccessMessage handleClose={handleClose} />}
      </Dialog>
    </ThemeProvider>
  );
}

type SuccessMessage = {
  handleClose: () => void;
};
function SuccessMessage({ handleClose }: SuccessMessage): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <DialogContent>
        <FiCheckCircle className={classes.successCheckmark} />
        <Typography>
          Welcome aboard! Please check your email, and follow the instructions to finalise your account.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button autoFocus onClick={handleClose} color="primary">
          Close Window
        </Button>
      </DialogActions>
    </>
  );
}

export default SignUpDialog;
