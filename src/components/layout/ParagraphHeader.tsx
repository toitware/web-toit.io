import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { breakpoints } from "../global-css";

const Wrapper = styled.div`
  ${breakpoints.small} {
    display: flex;
  }

  text-align: left;

  margin: 1.5rem 0;
`;

const Titles = styled.div`
  flex: 1;
  margin-bottom: 3rem;
  ${breakpoints.medium} {
    margin-right: 1.5rem;
  }
  h1,
  h2,
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
        <h2 className="h1">{title}</h2>
      </Titles>

      <Paragraph>{children}</Paragraph>
    </Wrapper>
  );
}

export default ParagraphHeader;
