import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import Link from "../link";

const rootCss = css`
  display: flex;
  text-decoration: none;
  border-radius: var(--borderRadius);
  padding: 0.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  svg {
    flex-shrink: 0;
    width: 5rem;
    height: 5rem;
  }
`;

const Text = styled.div`
  flex: 1;
  margin-left: 1.5rem;
`;
const Title = styled.div`
  display: block;
  text-decoration: underline;
`;
const Description = styled.div`
  display: block;
  text-decoration: none;
  font-size: 0.875rem;
`;

type SubmenuItemProps = {
  title: string;
  description: string;
  to?: string;
  href?: string;
  icon: JSX.Element;
};

export const SubmenuItem: React.FC<SubmenuItemProps> = ({ icon, title, to, href, description }) => (
  <Link css={rootCss} to={to} href={href}>
    {icon}

    <Text>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Text>
  </Link>
);

export default SubmenuItem;
