import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import consibioSvg from "../../assets/images/teams/consibio.svg";
import cosesySvg from "../../assets/images/teams/cosesy.svg";
import synapSvg from "../../assets/images/teams/synap.svg";
import triforkSvg from "../../assets/images/teams/trifork.svg";
import { breakpoints, greySection } from "../../components/global-css";
import Section from "../../components/layout/Section";

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4.5rem;
  margin: 0 auto;
  ${breakpoints.small} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TeamCell = styled.div`
  display: flex;
  place-content: center;
`;

export function TeamsSection(): JSX.Element {
  return (
    <Section
      css={css`
        ${greySection}
        border-top: none;
      `}
    >
      <h1
        css={css`
          font-family: inherit;
          font-size: 1.875rem;
          text-align: center;
          margin-bottom: var(--sectionVerticalPadding);
        `}
      >
        Great teams build on Toit
      </h1>

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
      </TeamGrid>
    </Section>
  );
}
export default TeamsSection;
