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
  gap: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  text-align: left;

  margin-bottom: 4.5rem;
`;

const Titles = styled.div`
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

const Paragraph = styled.div``;

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
