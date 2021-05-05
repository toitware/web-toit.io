import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { sidePadding } from "../global-css";

const Wrapper = styled.section`
  display: block;
  // We want the content to have a specific width, regardless of the padding
  box-sizing: content-box;
  max-width: 30rem;
  margin: 3rem 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  ${sidePadding}
`;

type Props = {
  children: ReactNode;
};

export function CenteredBlock({ children }: Props): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}

export default CenteredBlock;
