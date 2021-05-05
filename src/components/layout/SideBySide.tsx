import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { breakpoints } from "../global-css";

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${breakpoints.small} {
    grid-template-columns: 1fr 1fr;
    gap: 4.5rem;
  }
`;

const Content = styled.div`
  max-width: 32rem;
  text-align: left;
`;

const Illustration = styled.div`
  img,
  video {
    width: 100%;
    max-width: 24rem;
    ${breakpoints.medium} {
      max-width: none;
    }
  }

  ${breakpoints.small} {
    &.left {
      grid-row: 1;
    }
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
