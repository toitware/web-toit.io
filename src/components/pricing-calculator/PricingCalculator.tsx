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
import PricingResult from "./PricingResult";

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [codeUpdatesIntervalIndex, setCodeUpdatesIntervalIndex] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 6rem;
          }
        `}
      >
        <div>
          <AttributeTitle>App data</AttributeTitle>
          <AttributeSlider
            name="How many values do you measure"
            description="The number of values (temperature, air pressure, etc...) you measure and collect on your device."
            selectedAttributeIndex={dataPointsIndex}
            choices={dataPointsChoices}
            unitName="value"
            onChange={setDataPointsIndex}
          />
          <AttributeSlider
            name="How often does your device measure data"
            description="The interval at which your device measures the values."
            selectedAttributeIndex={messagesIntervalIndex}
            choices={messagesIntervalChoices}
            onChange={setMessagesIntervalIndex}
            showAsDuration
          />
          <AttributeSlider
            name="How often does your device go online"
            description="How often your device connects to the cloud to upload the collected values and check for updates."
            selectedAttributeIndex={connectsIntervalIndex}
            choices={connectsIntervalChoices}
            onChange={setConnectsIntervalIndex}
            showAsDuration
          />
        </div>
        <div>
          <AttributeSlider
            name="Scale your fleet"
            description="The amount of devices you intend on using with Toit."
            selectedAttributeIndex={numberOfDevicesIndex}
            choices={numberOfDevicesChoices}
            unitName="device"
            onChange={setNumberOfDevicesIndex}
          />
          <PricingResult calculationResult={calculationResult} />
        </div>
      </div>
    </Wrapper>
  );
}

export default PricingCalculator;
