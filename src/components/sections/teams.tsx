import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import consibioSvg from "../../assets/images/teams/consibio.svg";
import cosesySvg from "../../assets/images/teams/cosesy.svg";
import synapSvg from "../../assets/images/teams/synap.svg";
import triforkSvg from "../../assets/images/teams/trifork.svg";
import iotCatalystSvg from "../../assets/images/teams/iot-catalyst.svg";
import { breakpoints, clampBuilder, greySection } from "../../components/global-css";
import Section from "../../components/layout/Section";

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4.5rem;
  margin: 0 auto;
  ${breakpoints.small} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamCell = styled.div`
  display: flex;
  place-content: center;
`;

type Props = {
  className?: string;
};

export function TeamsSection({ className }: Props): JSX.Element {
  return (
    <Section
      className={className}
      css={css`
        ${greySection}
        --sectionVerticalPadding: ${clampBuilder("tiny", "huge", 4.5, 7.5)};
      `}
    >
      <h3
        css={css`
          font-family: inherit;
          font-weight: normal;
          font-size: 1.875rem;
          text-align: center;
          margin-bottom: var(--sectionVerticalPadding);
        `}
      >
        Great teams build on Toit
      </h3>

      <TeamGrid>
        <TeamCell>
          <img src={synapSvg} alt="Synap IoT" />
        </TeamCell>
        <TeamCell>
          <img src={triforkSvg} alt="Trifork" />
        </TeamCell>
        <TeamCell>
          <img src={cosesySvg} alt="Cosesy" />
        </TeamCell>
        <TeamCell>
          <img src={consibioSvg} alt="Consibio" />
        </TeamCell>
        <TeamCell>
          <img src={iotCatalystSvg} alt="IoT Catalyst" />
        </TeamCell>
      </TeamGrid>
    </Section>
  );
}
export default TeamsSection;
