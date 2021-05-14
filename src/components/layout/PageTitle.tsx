import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: block;
  text-align: center;
  padding: 7.5rem var(--calculatedContentPadding) 3rem;
`;

const Title = styled.h1`
  font-size: clamp(2.75rem, 4.5vw, 3.75rem);
  max-width: 11em;
  margin: 0 auto;
`;

const SubTitle = styled.h3`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: normal;
  margin: 0 auto;
`;

type Props = {
  title: string;
  subTitle?: string;
  className?: string;
};

export function PageTitle({ title, subTitle, className }: Props): JSX.Element {
  return (
    <Wrapper className={className}>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default PageTitle;
