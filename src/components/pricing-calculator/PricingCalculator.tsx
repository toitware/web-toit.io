import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { breakpoints, clampBuilder } from "../global-css";
import AttributeSlider from "./AttributeSlider";
import { calculate } from "./calculate";
import {
  codeUpdatesIntervalChoices,
  connectsIntervalChoices,
  dataPointsChoices,
  firmwareUpdatesIntervalChoices,
  messagesIntervalChoices,
  numberOfDevicesChoices,
} from "./choices";
import { formatBytes, formatPrice } from "./format";

const Wrapper = styled.div`
  text-align: left;
`;
const AttributeTitle = styled.h2`
  display: none;
  font-size: ${clampBuilder("tiny", "huge", 1.875, 2.5)};
  margin: 0;
`;

export function PricingCalculator({ className }: { className?: string }): JSX.Element {
  const [messagesIntervalIndex, setMessagesIntervalIndex] = useState(2);
  const [connectsIntervalIndex, setConnectsIntervalIndex] = useState(1);
  const [dataPointsIndex, setDataPointsIndex] = useState(2);
  const [codeUpdatesIntervalIndex, setCodeUpdatesIntervalIndex] = useState(1);
  const [firmwareUpdatesIntervalIndex, setFirmwareUpdatesIntervalIndex] = useState(0);
  const [numberOfDevicesIndex, setNumberOfDevicesIndex] = useState(0);

  const messagesInterval = messagesIntervalChoices[messagesIntervalIndex];
  const connectsInterval = connectsIntervalChoices[connectsIntervalIndex];
  const dataPoints = dataPointsChoices[dataPointsIndex];
  const codeUpdatesInterval = codeUpdatesIntervalChoices[codeUpdatesIntervalIndex];
  const firmwareUpdatesInterval = firmwareUpdatesIntervalChoices[firmwareUpdatesIntervalIndex];
  const numberOfDevices = numberOfDevicesChoices[numberOfDevicesIndex];

  const calculationResult = calculate({
    messagesInterval: messagesInterval,
    connectsInterval: connectsInterval,
    dataPoints: dataPoints,
    codeUpdatesInterval: codeUpdatesInterval,
    firmwareUpdatesInterval: firmwareUpdatesInterval,
    numberOfDevices: numberOfDevices,
  });

  return (
    <Wrapper className={className}>
      <div
        css={css`
          ${breakpoints.small} {
            display: flex;
          }
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          <AttributeTitle>App data</AttributeTitle>
          <AttributeSlider
            name="Time between messages"
            selectedAttributeIndex={messagesIntervalIndex}
            choices={messagesIntervalChoices}
            onChange={setMessagesIntervalIndex}
            showAsDuration
          />
          <AttributeSlider
            name="Time between connects"
            selectedAttributeIndex={connectsIntervalIndex}
            choices={connectsIntervalChoices}
            onChange={setConnectsIntervalIndex}
            showAsDuration
          />
          <AttributeSlider
            name="Data points per message"
            selectedAttributeIndex={dataPointsIndex}
            choices={dataPointsChoices}
            onChange={setDataPointsIndex}
          />
        </div>
        <div
          css={css`
            flex: 1;
          `}
        >
          <AttributeTitle>Service</AttributeTitle>
          <AttributeSlider
            name="Number of devices"
            selectedAttributeIndex={numberOfDevicesIndex}
            choices={numberOfDevicesChoices}
            onChange={setNumberOfDevicesIndex}
          />
          <AttributeSlider
            name="Time between code updates"
            selectedAttributeIndex={codeUpdatesIntervalIndex}
            choices={codeUpdatesIntervalChoices}
            onChange={setCodeUpdatesIntervalIndex}
            showAsDuration
          />
          <AttributeSlider
            name="Time between firmware updates"
            selectedAttributeIndex={firmwareUpdatesIntervalIndex}
            choices={firmwareUpdatesIntervalChoices}
            onChange={setFirmwareUpdatesIntervalIndex}
            showAsDuration
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          gap: 4.5rem;
          text-align: center;
          margin-top: 4.5rem;
        `}
      >
        <div
          css={css`
            min-width: 12rem;
          `}
        >
          <label
            css={css`
              font-size: ${clampBuilder("tiny", "huge", 0.875, 1.125)};
            `}
          >
            Data
          </label>
          <div
            css={css`
              font-family: var(--fontFamilyTitle);
              font-size: ${clampBuilder("tiny", "huge", 1.875, 3.125)};
              line-height: 1.5;
            `}
          >
            {formatBytes(calculationResult.megaBytes * 1024 * 1024)}
          </div>
        </div>
        <div
          css={css`
            min-width: 12rem;
          `}
        >
          <label
            css={css`
              font-size: ${clampBuilder("tiny", "huge", 0.875, 1.125)};
            `}
          >
            Cost
          </label>
          <div
            css={css`
              font-family: var(--fontFamilyTitle);
              font-size: ${clampBuilder("tiny", "huge", 1.875, 3.125)};
              line-height: 1.5;
            `}
          >
            {formatPrice(calculationResult.price)}
          </div>
        </div>
      </div>
      <div
        css={css`
          font-size: ${clampBuilder("tiny", "huge", 0.875, 1.125)};
          text-align: center;
          /* padding-top: 3rem; */
          /* border-top: 1px solid white; */
        `}
      >
        per month
      </div>
    </Wrapper>
  );
}

export default PricingCalculator;
