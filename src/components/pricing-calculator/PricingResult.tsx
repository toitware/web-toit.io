import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "rc-slider/assets/index.css";
import React from "react";
import { clampBuilder } from "../global-css";
import { CalculationResult } from "./calculate";
import { formatBytes, formatPrice } from "./format";

const PricingContainer = styled.div`
  border: 2px solid white;
  border-radius: 5px;
  max-width: ${clampBuilder("tiny", "huge", 30, 36)};
  margin: 0 auto;
`;
const List = styled.div`
  padding: 1.5rem;
`;
const Result = styled.div`
  padding: 1.5rem;
  background: white;
  color: black;
`;
const Position = styled.div`
  display: flex;
  align-items: center;
`;
const PositionName = styled.div`
  flex: 0.45;
  text-align: right;
  padding-right: 1.5rem;
  font-size: ${clampBuilder("tiny", "huge", 0.875, 1.25)};
`;
const PositionValue = styled.div`
  flex: 0.65;
  text-align: center;
`;

const DataSizeInfo = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: ${clampBuilder("tiny", "huge", 0.875, 1.25)};
`;

const finalPriceCss = css`
  font-family: var(--fontFamilyTitle);
  font-size: ${clampBuilder("tiny", "huge", 1.875, 3.125)};
  line-height: 1.3;
`;

export function PricingResult({ calculationResult }: { calculationResult: CalculationResult }): JSX.Element {
  return (
    <div>
      <PricingContainer>
        {calculationResult.price < 100 && (
          <List>
            <Position>
              <PositionName>Calculated</PositionName>
              <PositionValue>{formatPrice(calculationResult.originalPrice)}</PositionValue>
            </Position>
            <Position>
              <PositionName>First 100MB free</PositionName>
              <PositionValue>- {formatPrice(calculationResult.originalPrice - calculationResult.price)}</PositionValue>
            </Position>
          </List>
        )}
        <Result>
          <Position>
            <PositionName>
              <span
                css={css`
                  font-weight: bold;
                  font-size: 1.175em;
                `}
              >
                Cost estimate
              </span>
              <br />
              per month
            </PositionName>
            <PositionValue css={finalPriceCss}>{formatPrice(calculationResult.price)}</PositionValue>
          </Position>
        </Result>
      </PricingContainer>
      <DataSizeInfo>Based on approximately {formatBytes(calculationResult.megaBytes * 1024 * 1024)}</DataSizeInfo>
    </div>
  );
}

export default PricingResult;
