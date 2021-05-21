import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { black } from "../../theme";

export const SectionWrapper = styled.section`
  position: relative;
  padding: var(--sectionVerticalPadding) var(--calculatedContentPadding);
  border-top: 2px solid ${black.string()};
`;

const centeredCss = css`
  text-align: center;
`;

const smallPaddingTopCss = css`
  padding-top: 1.5rem;
`;

type Props = {
  className?: string;
  centered?: boolean;
  paddingTop?: "default" | "small";
};

const Section: React.FC<Props> = ({ children, className, centered = false, paddingTop = "default" }) => (
  <SectionWrapper className={className} css={[centered && centeredCss, paddingTop == "small" && smallPaddingTopCss]}>
    {children}
  </SectionWrapper>
);

export default Section;
