import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { bigFont, clampBuilder } from "./global-css";
import SignUpButton from "./sign-up-button";
import { black, golden, white } from "../theme";

const Wrapper = styled.div`
  position: relative;
  max-width: 40rem;
  background: ${white.string()};
  border: 1px solid ${black.string()};
  border-radius: var(--borderRadius);
  margin: 0 auto;
  font-size: 1rem;
`;

const FreeMbContainer = styled.div`
  ${bigFont}
  position: relative;
  border: 1px solid black;
  margin: 0 auto 3rem auto;
  border-radius: 8px;
  max-width: 26rem;
  background: ${golden.toString()};
  padding: 5px;
`;
const FreeMbContent = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  padding: 3rem;
  background: white;
  strong {
    font-family: var(--fontFamilyTitle);
    font-size: 1.875rem;
    font-weight: 200;
  }
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
      <FreeMbContainer>
        <FreeMbContent>
          First <strong>100 MB</strong> per month <strong>free forever</strong>
        </FreeMbContent>
      </FreeMbContainer>
      <div>after that</div>
      <div
        css={css`
          font-family: "ClashDisplay", Verdana, sans-serif;
          font-size: 3.125rem;
          line-height: 1.3;
        `}
      >
        $0.10
      </div>
      <div>per MB data used</div>

      <SignUpButton
        css={css`
          margin: 1.5rem 0;
          min-width: 50%;
        `}
      />
    </div>
  </Wrapper>
);

export default PricingBlock;
