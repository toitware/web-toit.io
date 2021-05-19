import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef } from "react";
import { useViewportPosition } from "../helper";

const Wrapper = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 0 var(--contentPadding);
`;

export type Props = {
  image: string;
  imageWidth: number;
  containerHeightRem?: number;
};

export const HeroImage: React.FC<Props> = ({ image, imageWidth, containerHeightRem = 20 }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const maxScale = 1.2;

  useViewportPosition(wrapperRef, (position) => {
    if (!imageRef.current) return;

    const scale = 1.0 + position * (maxScale - 1);
    imageRef.current.style.transform = `scale(${scale})`;
  });

  return (
    <Wrapper
      ref={wrapperRef}
      css={css`
        height: ${containerHeightRem}rem;
      `}
    >
      <img
        ref={imageRef}
        css={css`
          width: ${imageWidth}px;
          max-width: none !important;
          transform-origin: left top;
          @media (min-width: ${imageWidth + 120}px) {
            transform-origin: center top;
          }
        `}
        src={image}
      />
    </Wrapper>
  );
};

export default HeroImage;
