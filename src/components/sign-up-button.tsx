import React from "react";
import { ButtonLink, ButtonProps } from "./button";

type SignUpButtonProps = Pick<ButtonProps, "size" | "variant"> & {
  className?: string;
  text?: string;
};

const jaguarLink = "https://github.com/toitlang/jaguar";

function SignUpButton({ size, variant = "contained", className, text = "Start now" }: SignUpButtonProps): JSX.Element {
  return (
    <ButtonLink variant={variant} size={size} className={className} href={jaguarLink}>
      {text}
    </ButtonLink>
  );
}

export default SignUpButton;
