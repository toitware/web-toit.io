import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { breakpoints } from "../global-css";

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  gap: clamp(3rem, 6vw, 4.5rem);

  ${breakpoints.small} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  max-width: 32rem;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1:first-of-type,
  h2:first-of-type,
  p:first-of-type {
    margin-top: 0;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`;

const Illustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    max-width: min(24rem, 100%);
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
  className?: string;
};

export function SideBySide({
  children,
  className,
  illustration,
  illustrationPosition = "right",
}: SideBySideProps): JSX.Element {
  return (
    <Wrapper className={className}>
      <Content>
        <div>{children}</div>
      </Content>
      <Illustration className={illustrationPosition}>
        {typeof illustration === "string" && <img src={illustration} />}
        {typeof illustration !== "string" && illustration}
      </Illustration>
    </Wrapper>
  );
}

export default SideBySide;
