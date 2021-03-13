import { Button, createStyles, DialogActions, DialogContent, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      padding: theme.spacing(2),
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

type SignUpSuccessProps = {
  handleClose: () => void;
};
export function SignUpSuccess({ handleClose }: SignUpSuccessProps): JSX.Element {
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

export default SignUpSuccess;
