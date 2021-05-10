import { css } from "@emotion/react";
import { Link } from "./link";
import React from "react";
import { black, white } from "../theme";

const base = css`
  background: ${black.string()};
  color: ${white.string()};
  font-size: inherit;
  border: none;
  display: inline-flex;
  align-items: center;
  line-height: 1.5rem;
  height: 3.25rem;
  padding: 0 1.875rem;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const small = css`
  height: 2.5rem;
  padding: 0 1.25rem;
`;

const outlined = css`
  border: 2px solid ${black.string()};
  color: ${black.string()};
  background: transparent;
`;

type BaseProps = {
  children: React.ReactNode;
  size?: "small" | "medium";
  variant?: "contained" | "outlined";
  className?: string;
};

export type ButtonProps = Pick<React.HTMLProps<HTMLButtonElement>, "onClick"> & BaseProps;

export function Button(props: ButtonProps): JSX.Element {
  const { children, className, size = "medium", variant = "contained" } = props;
  return (
    <button
      className={className}
      css={[base, size == "small" && small, variant == "outlined" && outlined]}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}

export type ButtonLinkProps = BaseProps & {
  to?: string;
  href?: string;
};

export function ButtonLink({
  children,
  to,
  href,
  size = "medium",
  variant = "contained",
  className,
}: ButtonLinkProps): JSX.Element {
  return (
    <Link
      to={to}
      href={href}
      className={className}
      css={[base, size == "small" && small, variant == "outlined" && outlined]}
    >
      {children}
    </Link>
  );
}

export default Button;
