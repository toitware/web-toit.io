import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { clampBuilder } from "./global-css";

export const ContentSpacerDiv = styled.div`
  margin: ${clampBuilder("small", "huge", 6, 12)} 1.5rem;
`;

const line = css`
  @media (max-width: 450px) {
    height: 1px;
    background: black;
  }
`;

type Props = {
  preventLine?: boolean;
};

export const ContentSpacer: React.FC<Props> = ({ preventLine = false }) => {
  return <ContentSpacerDiv css={!preventLine && line} />;
};

export default ContentSpacer;
