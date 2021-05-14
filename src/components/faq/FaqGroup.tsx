import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  text-align: left;
  padding-top: 0;
  padding-bottom: 3rem;
`;

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
    <Wrapper
      css={css`
        --activeColor: ${activeColor};
      `}
    >
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default FaqGroup;
