import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { breakpoints } from "../global-css";

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${breakpoints.small} {
    display: flex;
  }

  text-align: left;

  margin-bottom: 4.5rem;
`;

const Titles = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
  ${breakpoints.medium} {
    margin-right: 1.5rem;
  }
  h1,
  h3 {
    margin: 0;
  }
  h3 {
    font-weight: normal;
    font-size: inherit;
    margin-bottom: 0.25rem;
  }
`;

const Paragraph = styled.div`
  flex: 1;
`;

type ParagraphHeaderProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function ParagraphHeader({ children, title, subtitle }: ParagraphHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <Titles>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
      </Titles>

      <Paragraph>{children}</Paragraph>
    </Wrapper>
  );
}

export default ParagraphHeader;
