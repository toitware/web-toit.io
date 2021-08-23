import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { usePopper } from "react-popper";

const Wrapper = styled.div`
  display: inline-block;
  height: 16px;
  width: 16px;
  position: relative;
`;
const InfoIcon = styled.a`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
`;
const infoIconCss = css`
  position: relative;
  display: block;
`;
const Tooltip = styled.div`
  transition: opacity 0.3s ease;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  z-index: 1000;
  font-size: 0.875em;
  width: min(24rem, 90vw);
  color: black;
  line-height: 1.5;

  &[data-popper-placement^="top"] > .arrow {
    bottom: -5px;
  }

  &[data-popper-placement^="bottom"] > .arrow {
    top: -5px;
  }

  &[data-popper-placement^="left"] > .arrow {
    right: -5px;
  }

  &[data-popper-placement^="right"] > .arrow {
    left: -5px;
  }
`;
const Arrow = styled.div`
  width: 10px;
  height: 10px;
  &::before {
    width: 10px;
    height: 10px;
    background: white;
    visibility: visible;
    content: "";
    transform: rotate(45deg);
    display: block;
  }
`;

export function InfoTooltip({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<SVGElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLElement | null>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "offset", options: { offset: [0, 14] } },
      {
        name: "preventOverflow",
        options: {
          padding: 16,
        },
      },
    ],
  });

  return (
    <Wrapper className={className}>
      <InfoIcon
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsVisible(!isVisible);
        }}
        onMouseEnter={() => {
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsVisible(false);
        }}
      >
        <svg
          css={infoIconCss}
          ref={setReferenceElement}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="8" fill="white" />
          <rect x="7" y="7.07275" width="2" height="6.23462" fill="black" />
          <ellipse cx="8.00008" cy="4.25127" rx="1.22664" ry="1.10235" fill="black" />
        </svg>
      </InfoIcon>

      {isVisible && (
        <Tooltip ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          {children}
          <Arrow className="arrow" data-popper-arrow style={styles.arrow} />
        </Tooltip>
      )}
    </Wrapper>
  );
}

export default InfoTooltip;
