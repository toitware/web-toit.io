import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

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

  const maxScale = 1.3;

  useEffect(() => {
    let scale = 1.0;

    if (!wrapperRef.current) return;

    const wrapperElement = wrapperRef.current;
    const eventListener = () => {
      if (imageRef.current) {
        const rect = wrapperElement.getBoundingClientRect();
        const start = rect.top + window.scrollY;
        const end = -rect.height;

        scale = Math.max(1.0, Math.min(maxScale, 1.0 + ((rect.top - start) / (end - start)) * (maxScale - 1)));
        imageRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", eventListener);

    return () => window.removeEventListener("scroll", eventListener);
  }, [wrapperRef.current, imageRef]);

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
          /* transition: transform 50ms linear ; */
        `}
        src={image}
      />
    </Wrapper>
  );
};

export default HeroImage;
