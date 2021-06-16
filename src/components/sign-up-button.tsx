import React from "react";
import { Button, ButtonProps } from "./button";

type SignUpButtonProps = Pick<ButtonProps, "size"> & {
  className?: string;
  text?: string;
};

const signupLink = "https://auth.toit.io/signup";

function SignUpButton({ size, className, text = "Start now" }: SignUpButtonProps): JSX.Element {
  return (
    <Button variant="contained" size={size} className={className} onClick={() => (window.location.href = signupLink)}>
      {text}
    </Button>
  );
}

export default SignUpButton;
