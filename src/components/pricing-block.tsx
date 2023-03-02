import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { black, golden, white } from "../theme";
import { clampBuilder } from "./global-css";
import SignUpButton from "./sign-up-button";

const Wrapper = styled.div`
  position: relative;
  max-width: 40rem;
  background: ${white.string()};
  border: 1px solid ${black.string()};
  border-radius: var(--borderRadius);
  margin: 0 auto;
  font-size: 1rem;
`;

const PricingBlockHeader = styled.header`
  background: ${black.string()};
  height: ${clampBuilder(375, 1080, 3.75, 5.125)};
  padding: ${clampBuilder(375, 1080, 0.5, 1)} 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${golden.string()};

  h2 {
    margin: 0;
    font-size: clamp(1.25rem, 4vw, 1.875rem);
  }
`;

const freeLimit = css`
  color: white;
  font-size: clamp(0.875rem, 2vw, 1.25rem);
`;

type Props = {
  className?: string;
};

const PricingBlock: React.FC<Props> = ({ className }) => (
  <Wrapper className={className}>
    <PricingBlockHeader>
      <h2>Single rate</h2>
      <span css={freeLimit}>SERVICE 10 DEVICES FOR FREE</span>
    </PricingBlockHeader>
    <div
      css={css`
        text-align: center;
        padding: 3rem 5%;
      `}
    >
      <div
        css={css`
          font-family: "ClashDisplay", Verdana, sans-serif;
          font-size: 3.125rem;
          line-height: 1.3;
        `}
      >
        $0.50
      </div>
      <div css={css``}>per serviced device per month</div>
      <div
        css={css`
          margin-top: 1.5rem;
          font-size: 1.25rem;
        `}
      >
        Free forever and full-featured on <b>10</b> devices.
      </div>

      <SignUpButton
        css={css`
          margin: 1.5rem 0 0 0;
        `}
      />
    </div>
  </Wrapper>
);

export default PricingBlock;
