import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const Wrapper = styled.div`
  position: relative;
  display: block;
  // We want the content to have a specific width, regardless of the padding
  box-sizing: content-box;
  max-width: 30rem;
  margin: 3rem auto;
  text-align: center;
`;

type Props = {
  children: ReactNode;
  className?: string;
};

export function CenteredBlock({ children, className }: Props): JSX.Element {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default CenteredBlock;
