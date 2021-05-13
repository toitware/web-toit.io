import { Button, ButtonProps } from "./button";
import React from "react";
import { useSignUp } from "./sign-up/context";

type SignUpButtonProps = Pick<ButtonProps, "size"> & {
  className?: string;
};

function SignUpButton({ size, className }: SignUpButtonProps): JSX.Element {
  const { dispatch } = useSignUp();

  return (
    <Button variant="contained" size={size} className={className} onClick={() => dispatch("open")}>
      Start now
    </Button>
  );
}

export default SignUpButton;
