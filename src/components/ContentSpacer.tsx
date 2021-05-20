import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { clampBuilder } from "./global-css";

export const ContentSpacerDiv = styled.div`
  padding: ${clampBuilder("small", "huge", 3, 6)} 1.5rem;
`;

const largeCss = css`
  padding: ${clampBuilder("small", "huge", 4.5, 9)} 1.5rem;
`;

const Line = styled.hr`
  height: 1px;
  background: currentColor;
  border: none;
  margin: 0;
  @media (min-width: 450px) {
    display: none;
  }
`;

type Props = {
  large?: boolean;
  preventLine?: boolean;
};

export const ContentSpacer: React.FC<Props> = ({ preventLine = false, large = false }) => {
  return <ContentSpacerDiv css={large && largeCss}>{!preventLine && <Line />}</ContentSpacerDiv>;
};

export default ContentSpacer;
