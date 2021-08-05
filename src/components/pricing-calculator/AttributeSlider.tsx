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
  selectedAttributeIndex: number;
  onChange: (attributeIndex: number) => void;
};

const AttributeDisplay = styled.span`
  font-family: var(--fontFamilyTitle);
  font-size: 1.875rem;
  width: 5em;
`;

function AttributeSlider({
  name,
  choices,
  showAsDuration = false,
  selectedAttributeIndex,
  onChange,
}: AttributeSliderProps): JSX.Element {
  const min = 0;
  const max = choices.length - 1;

  const selectedAttribute = choices[selectedAttributeIndex];
  const displayValue = showAsDuration ? formatDuration(selectedAttribute) : formatNumber(selectedAttribute);

  return (
    <div
      css={css`
        margin: ${clampBuilder(600, 1200, 3, 6, { basis: "vh" })} 0;
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
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Slider
          css={css`
            flex: 1;
            margin-right: 1.5rem;
            align-items: center;
          `}
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
    </div>
  );
}

export default AttributeSlider;
