import styled from "@emotion/styled";
import { clampBuilder } from "./global-css";

export const ContentSpacer = styled.div`
  margin: ${clampBuilder("small", "huge", 6, 12)};
`;

export default ContentSpacer;
