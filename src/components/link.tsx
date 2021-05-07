import { Link as GatsbyLink } from "gatsby";
import * as React from "react";
import { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
} & React.HTMLProps<HTMLAnchorElement>;

export function Link(props: Props): JSX.Element {
  const { to, href, children } = props;

  if (href) {
    return <a target="_blank" rel="noreferrer" {...props} />;
  } else if (to) {
    return (
      <GatsbyLink to={to} className={props.className}>
        {children}
      </GatsbyLink>
    );
  } else {
    return <span>{children}</span>;
  }
}

export default Link;
