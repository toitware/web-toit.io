import { Button, ButtonProps, useTheme } from "@material-ui/core";
import React from "react";
import GetStartedDialog from "./sign-up-dialog";

type SignUpButtonProps = Pick<ButtonProps, "size"> & {
  className?: string;
};

function SignUpButton({ size, className }: SignUpButtonProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size={size}
        className={className}
        disableElevation
        onClick={handleClickOpen}
      >
        Try it Free
      </Button>
      <GetStartedDialog open={open} handleClose={handleClose}></GetStartedDialog>
    </>
  );
}

export default SignUpButton;
