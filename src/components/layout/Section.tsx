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

type Props = {
  className?: string;
  centered?: boolean;
};

const Section: React.FC<Props> = ({ children, className, centered = false }) => (
  <SectionWrapper className={className} css={centered && centeredCss}>
    {children}
  </SectionWrapper>
);

export default Section;
