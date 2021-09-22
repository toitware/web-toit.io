import React from "react";
import { ButtonLink, ButtonProps } from "./button";

type SignUpButtonProps = Pick<ButtonProps, "size" | "variant"> & {
  className?: string;
  text?: string;
};

const signupLink = "https://auth.toit.io/signup";

function SignUpButton({ size, variant = "contained", className, text = "Start now" }: SignUpButtonProps): JSX.Element {
  return (
    <ButtonLink variant={variant} size={size} className={className} href={signupLink}>
      {text}
    </ButtonLink>
  );
}

export default SignUpButton;
