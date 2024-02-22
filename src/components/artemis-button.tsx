import React from "react";
import { ButtonLink, ButtonProps } from "./button";

type ArtemisButtonProps = Pick<ButtonProps, "size" | "variant"> & {
  className?: string;
  text?: string;
};

const getStartedLink = "https://docs.toit.io/getstarted/fleet";

function ArtemisButton({ size, variant = "contained", className, text = "Manage your fleet" }: ArtemisButtonProps): JSX.Element {
  return (
    <ButtonLink variant={variant} size={size} className={className} href={getStartedLink}>
      {text}
    </ButtonLink>
  );
}

export default ArtemisButton;
