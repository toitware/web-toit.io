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
  border-radius: var(--borderRadius);
  text-decoration: none;
  cursor: pointer;
  border: 2px solid ${black.string()};

  &:hover {
    border: 2px solid ${black.string()};
    color: ${black.string()};
    background: ${white.string()};
  }

  transition: all 150ms linear;
`;

const small = css`
  height: 2.5rem;
  padding: 0 1.25rem;
`;

const outlined = css`
  color: ${black.string()};
  background: ${white.string()};
  &:hover {
    color: ${white.string()};
    background: ${black.string()};
  }
`;

const text = css`
  border-color: transparent;
  color: ${black.string()};
  background: transparent;
  &:hover {
    border-color: ${black.string()};
    /* background: ; */
  }
`;

type BaseProps = {
  children: React.ReactNode;
  size?: "small" | "medium";
  variant?: "contained" | "outlined" | "text";
  className?: string;
};

export type ButtonProps = Pick<React.ComponentProps<"button">, "onClick" | "type" | "autoFocus" | "disabled"> &
  BaseProps;

export function Button(props: ButtonProps): JSX.Element {
  const { children, size = "medium", variant = "contained" } = props;
  return (
    <button
      {...props}
      css={[base, size == "small" && small, variant == "outlined" && outlined, variant == "text" && text]}
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
      css={[base, size == "small" && small, variant == "outlined" && outlined, variant == "text" && text]}
    >
      {children}
    </Link>
  );
}

export default Button;
