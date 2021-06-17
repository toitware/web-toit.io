import React from "react";
import { ButtonLink, ButtonProps } from "./button";

type SignUpButtonProps = Pick<ButtonProps, "size"> & {
  className?: string;
};

const signupLink = "https://auth.toit.io/signup";

function SignUpButton({ size, className }: SignUpButtonProps): JSX.Element {
  return (
    <ButtonLink variant="contained" size={size} className={className} href={signupLink}>
      Start now
    </ButtonLink>
  );
}

export default SignUpButton;
