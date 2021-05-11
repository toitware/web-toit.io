import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Section from "../layout/Section";

const Title = styled.h2`
  font-family: inherit;
  font-size: inherit;
`;

type FaqGroupProps = {
  title: string;
  activeColor: string;
};

export const FaqGroup: React.FC<FaqGroupProps> = ({ title, children, activeColor }) => {
  return (
    <Section
      css={css`
        text-align: left;
        padding-top: 0;
        padding-bottom: 3rem;
        --activeColor: ${activeColor};
      `}
    >
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

export default FaqGroup;
