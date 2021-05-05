import { css } from "@emotion/react";
import { Link } from "gatsby";
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

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium";
  variant?: "contained" | "outlined";
};

export function Button({ children, size = "medium", variant = "contained" }: Props): JSX.Element {
  return <button css={[base, size == "small" && small, variant == "outlined" && outlined]}>{children}</button>;
}

type LinkProps = {
  to: string;
};

export function ButtonLink({ children, to, size = "medium", variant = "contained" }: Props & LinkProps): JSX.Element {
  return (
    <Link to={to} css={[base, size == "small" && small, variant == "outlined" && outlined]}>
      {children}
    </Link>
  );
}

export default Button;
