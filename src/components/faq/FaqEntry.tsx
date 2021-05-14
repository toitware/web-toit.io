import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { black } from "../../theme";
import CaretSvg from "../../assets/images/icons/caret.inline.svg";

const Wrapper = styled.div`
  margin-top: 1.5rem;
  border-radius: var(--borderRadius);
  border: 2px solid ${black.string()};
  // Prevent the corners of the title to stick out the border radius.
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: none;
  position: relative;
  padding: 1.5rem;
  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background: ${black.string()};
  }

  p:last-of-type {
    margin-bottom: 0;
  }
  p:first-of-type {
    margin-top: 0;
  }

  ul {
    padding: 0;
  }
  li {
    list-style: none;
    margin-bottom: 1.5rem;
  }
`;

const Question = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: normal;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  line-height: 1.3;

  &:hover {
    background: var(--activeColor);
  }
`;

type FaqEntryProps = {
  question: string;
};

export const FaqEntry: React.FC<FaqEntryProps> = ({ children, question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Question
        onClick={() => setIsOpen(!isOpen)}
        css={
          isOpen &&
          css`
            background: var(--activeColor);
          `
        }
      >
        {question}
        <CaretSvg
          css={[
            css`
              width: 1rem;
              height: auto;
            `,
            isOpen &&
              css`
                transform: rotate(180deg);
              `,
          ]}
        />
      </Question>
      <ContentWrapper
        css={
          isOpen &&
          css`
            display: block;
          `
        }
      >
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export default FaqEntry;
