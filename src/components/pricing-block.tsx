import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { clampBuilder } from "../components/global-css";
import SignUpButton from "../components/sign-up-button";
import { black, dart, golden, python, white } from "../theme";

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
      <h2>Standard rate</h2>
      <span css={freeLimit}>100 MB FREE</span>
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
        $0.10
      </div>
      <div css={css``}>per MB</div>
      <div
        css={css`
          margin-top: 1.5rem;
        `}
      >
        First 100 MB per month are always free.
      </div>

      <SignUpButton
        css={css`
          margin: 1.5rem 0;
        `}
      />

      <div
        css={css`
          font-family: "ClashDisplay", Verdana, sans-serif;
          font-size: 1.875rem;
          max-width: 9em;
          margin: 1.5rem auto;
          line-height: 1.3;
          strong {
            color: ${dart.string()};
            font-weight: inherit;
          }
        `}
      >
        Need more than <strong>10GB</strong> per month?
      </div>
      <div>
        <a href="mailto:sales@toit.io">Contact us</a> for more than 10GB per month.
      </div>
    </div>
  </Wrapper>
);

export default PricingBlock;
