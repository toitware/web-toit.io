import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1.0);

  const maxScale = 1.3;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const elementBottom = element.getBoundingClientRect().bottom;

    const eventListener = () => {
      if (window.scrollY > elementBottom) {
        setScale(maxScale);
        return;
      }
      setScale(1.0 + (window.scrollY / elementBottom) * (maxScale - 1.0));
    };

    window.addEventListener("scroll", eventListener);

    return () => window.removeEventListener("scroll", eventListener);
  }, [ref.current]);

  return (
    <Wrapper
      ref={ref}
      css={css`
        height: ${containerHeightRem}rem;
      `}
    >
      <img
        css={css`
          width: ${imageWidth}px;
          max-width: none !important;
          transform-origin: left top;
          @media (min-width: ${imageWidth + 120}px) {
            transform-origin: center top;
          }
          /* transition: transform 50ms linear ; */
        `}
        style={{ transform: `scale(${scale})` }}
        src={image}
      />
    </Wrapper>
  );
};

export default HeroImage;
