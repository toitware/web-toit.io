import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef } from "react";
import { useViewportPosition } from "../helper";

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

  padding: max(2%, 1rem) max(1rem, 4%);
`;

const Icon = styled.div`
  flex-shrink: 0;
  > * {
    width: 100%;
    height: auto;
  }

  width: clamp(3rem, 8vw, 4rem);
`;

const Text = styled.div`
  margin: 0 0 0 1rem;
  line-height: 1.3em;
  font-size: clamp(1rem, 3vw, 1.875rem);
`;

const Title = styled.h1`
  font-family: inherit;
  margin: 0 0 1rem 0;
  font-size: clamp(0.875rem, 2vw, 1.25rem);
`;

type Props = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
  position: "left" | "right";
};

export function FeatureBox({ children, icon, title, className, position }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  const maxOffset = 80;

  useViewportPosition(ref, (pos) => {
    if (!ref.current) return;

    pos = 1 - Math.min(1.0, pos * 3);

    if (position == "left") {
      pos = 0 - pos;
    }

    const offset = maxOffset * pos;
    ref.current.style.transform = `translateX(${offset}px)`;
  });

  return (
    <Wrapper
      ref={ref}
      className={className}
      css={
        position == "right" &&
        css`
          align-self: flex-end;
        `
      }
    >
      <Icon>{icon}</Icon>

      <Text>
        <Title>{title}</Title>
        {children}
      </Text>
    </Wrapper>
  );
}

export default FeatureBox;
