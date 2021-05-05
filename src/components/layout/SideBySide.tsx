import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { sidePadding } from "../global-css";

const Wrapper = styled.section`
  margin: 0 auto;
  // We want the content to have a specific width, regardless of the padding
  box-sizing: content-box;
  max-width: 1080px;
  ${sidePadding}

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Content = styled.div`
  max-width: 28rem;
  text-align: left;
`;

const Illustration = styled.div`
  img {
    max-width: 100%;
  }
  &.left {
    grid-row: 1;
  }
`;

type SideBySideProps = {
  title?: string;
  children: ReactNode;
  illustration: string | JSX.Element;
  illustrationPosition?: "left" | "right";
};

export function SideBySide({ children, illustration, illustrationPosition = "right" }: SideBySideProps): JSX.Element {
  return (
    <Wrapper>
      <Content>{children}</Content>
      <Illustration className={illustrationPosition}>
        {typeof illustration === "string" && <img src={illustration} />}
        {typeof illustration !== "string" && illustration}
      </Illustration>
    </Wrapper>
  );
}

export default SideBySide;
