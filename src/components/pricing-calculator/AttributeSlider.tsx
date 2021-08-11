import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";
import { golden } from "../../theme";
import { clampBuilder } from "../global-css";
import { formatDuration, formatNumber } from "./format";

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

type AttributeSliderProps = {
  name: string;
  showAsDuration?: boolean;
  choices: number[];
  unitName?: string;
  selectedAttributeIndex: number;
  onChange: (attributeIndex: number) => void;
};

const AttributeDisplay = styled.span`
  font-family: var(--fontFamilyTitle);
  font-size: 1.875rem;
  margin: 1.5rem 0;
  display: block;
`;
const sliderCss = css`
  flex: 1;
  align-items: center;
  width: auto;
  margin: 0 0.25rem;
`;

function AttributeSlider({
  name,
  choices,
  unitName,
  showAsDuration = false,
  selectedAttributeIndex,
  onChange,
}: AttributeSliderProps): JSX.Element {
  const min = 0;
  const max = choices.length - 1;

  const selectedAttribute = choices[selectedAttributeIndex];
  const displayValue = showAsDuration ? formatDuration(selectedAttribute) : formatNumber(selectedAttribute, unitName);

  return (
    <div
      css={css`
        margin-bottom: ${clampBuilder(600, 1200, 1.5, 4.5, { basis: "vh" })};
      `}
    >
      <label
        css={css`
          font-size: ${clampBuilder("tiny", "huge", 1, 1.25)};
          margin-bottom: 1em;
          display: block;
        `}
      >
        {name}
      </label>
      <Slider
        css={sliderCss}
        value={selectedAttributeIndex}
        dots
        min={min}
        max={max}
        onChange={onChange}
        step={1}
        railStyle={{ backgroundColor: "white", height: 2 }}
        trackStyle={{ backgroundColor: golden.toString(), height: 2 }}
        dotStyle={{ borderColor: "white", bottom: 1, width: 4, height: 4, marginLeft: -2 }}
        activeDotStyle={{
          borderColor: golden.toString(),
          backgroundColor: golden.toString(),
          bottom: 1,
          width: 4,
          height: 4,
          marginLeft: -2,
        }}
        handleStyle={{
          borderColor: golden.toString(),
          backgroundColor: golden.toString(),
          width: 20,
          height: 20,
          marginTop: -9,
        }}
      />
      <AttributeDisplay>{displayValue}</AttributeDisplay>
    </div>
  );
}

export default AttributeSlider;
