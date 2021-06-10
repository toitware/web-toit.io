import React from "react";
import { Button, ButtonProps } from "./button";

type SignUpButtonProps = Pick<ButtonProps, "size"> & {
  className?: string;
};

const signupLink = "https://auth.toit.io/signup";

function SignUpButton({ size, className }: SignUpButtonProps): JSX.Element {
  return (
    <Button variant="contained" size={size} className={className} onClick={() => (window.location.href = signupLink)}>
      Start now
    </Button>
  );
}

export default SignUpButton;
