import styled from "@emotion/styled";
import React from "react";
import { breakpoints } from "./global-css";

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 1.5rem 0;
  text-align: left;
  max-width: 44rem;

  display: flex;

  padding: 2% 4%;

  &:nth-child(even) {
    align-self: flex-end;
  }
`;

const Icon = styled.div`
  flex-shrink: 0;
  > * {
    width: 100%;
    height: auto;
  }

  width: 3rem;

  ${breakpoints.small} {
    width: 4rem;
  }
`;

const Text = styled.p`
  margin: 0 0 0 1rem;
  line-height: 1.3em;

  ${breakpoints.small} {
    font-size: 1.875rem;
  }
`;

const Title = styled.h1`
  font-family: inherit;
  font-size: 0.875rem;
  margin: 0 0 1rem 0;
  ${breakpoints.medium} {
    font-size: 1.25rem;
  }
`;

type Props = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function FeatureBox({ children, icon, title, className }: Props): JSX.Element {
  return (
    <Wrapper className={className}>
      <Icon>{icon}</Icon>

      <Text>
        <Title>{title}</Title>
        {children}
      </Text>
    </Wrapper>
  );
}

export default FeatureBox;
