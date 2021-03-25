import { Button, ButtonProps } from "@material-ui/core";
import React from "react";
import { useSignUp } from "./sign-up/context";

type SignUpButtonProps = Pick<ButtonProps, "size"> & {
  className?: string;
};

function SignUpButton({ size, className }: SignUpButtonProps): JSX.Element {
  const { dispatch } = useSignUp();

  return (
    <Button
      variant="contained"
      color="primary"
      size={size}
      className={className}
      disableElevation
      onClick={() => dispatch("open")}
    >
      Try it Free
    </Button>
  );
}

export default SignUpButton;
