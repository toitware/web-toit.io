import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
  width: number;
  height: number;
  containerHeightRem?: number;
};

export const HeroImage: React.FC<Props> = ({ image, width, containerHeightRem = 20 }) => {
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
      <div
        ref={imageRef}
        css={css`
          transform-origin: left top;
          @media (min-width: ${width + 120}px) {
            transform-origin: center top;
          }
        `}
      >
        <LazyLoadImage
          css={css`
            width: ${width}px;
            max-width: none !important;
          `}
          src={image}
        />
      </div>
    </Wrapper>
  );
};

export default HeroImage;
