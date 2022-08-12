import { createStyles, DialogActions, DialogContent, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../button";

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
  trackingPixel?: string;
};
export function SignUpSuccess({ handleClose, trackingPixel }: SignUpSuccessProps): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <DialogContent>
        <FiCheckCircle className={classes.successCheckmark} />
        <Typography>
          Thanks for the interest.
          <br /> If you want to experience Toit today, you can{" "}
          <Link href="https://github.com/toitlang/jaguar">try Jaguar</Link> on your devices.
          {trackingPixel !== undefined && (
            <img height="1" width="1" style={{ display: "none" }} alt="" src={trackingPixel} />
          )}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </>
  );
}

export default SignUpSuccess;
