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

  const maxScale = 1.2;

  useEffect(() => {
    if (!wrapperRef.current || !imageRef.current) return;
    const wrapperElement = wrapperRef.current;
    const imageElement = imageRef.current;

    let scale = 1.0;
    let isAnimating = false;

    const startAnimating = () => {
      if (!isAnimating) {
        isAnimating = true;
        loopCycle();
      }
    };
    const stopAnimating = () => {
      isAnimating = false;
    };

    let prevPosition = 0.0;

    // The maximumg amount of steps that should be jumped from one position to
    // the next. This allows for a smooth animation even when scrolling with
    // the mouse.
    const maxStep = 0.03;

    // Using a loop cycle with animation frame instead of a scroll listener
    // so we can interpolate between different positions.
    const loopCycle = () => {
      const bottom = wrapperElement.getBoundingClientRect().bottom + window.scrollY;

      let position = window.scrollY / bottom;

      // Add some linear interpolation between the steps.
      if (Math.abs(position - prevPosition) > maxStep) {
        if (position > prevPosition) {
          position = prevPosition + maxStep;
        } else {
          position = prevPosition - maxStep;
        }
      }

      prevPosition = position;
      scale = 1.0 + position * (maxScale - 1);
      imageElement.style.transform = `scale(${scale})`;
      if (isAnimating) {
        window.requestAnimationFrame(loopCycle);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimating();
        } else {
          stopAnimating();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );
    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
      stopAnimating();
    };
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
        `}
        src={image}
      />
    </Wrapper>
  );
};

export default HeroImage;
