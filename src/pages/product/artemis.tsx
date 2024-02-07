import { css } from "@emotion/react";
import React from "react";
import editorSvg from "../../assets/images/editor.svg";
import fleetSvg from "../../assets/images/illustrations/fleet.svg";
import overTheAirUpdatesSvg from "../../assets/images/illustrations/over-the-air-updates.svg";
import ContentSpacer from "../../components/ContentSpacer";
import HeroImage from "../../components/HeroImage";
import ArtemisButton from "../../components/artemis-button";
import { bigFont } from "../../components/global-css";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import { dartSecondary, golden } from "../../theme";

export function ArtemisPage(): JSX.Element {
  return (
    <Layout
      title="Fleet management with Artemis"
      description="Manage your fleet of devices with robust over-the-air updates."
      noDefaultSignup={true}
      callToAction={<ArtemisButton size="small" />}
    >
      <PageTitle
        title="Artemis"
        subTitle="Fleet management"
        css={css`
          background: ${dartSecondary.string()};
        `}
      />

      <Section
        css={css`
          padding: 4.5rem 0 0;
        `}
      >
        <CenteredBlock
          css={css`
            padding-left: var(--contentPadding);
            padding-right: var(--contentPadding);
          `}
        >
          <p css={bigFont}>A fleet management system under your control.</p>
          <ArtemisButton />
        </CenteredBlock>

        <HeroImage containerHeightRem={18} image={editorSvg} width={1024} height={314} />
      </Section>
      <Section centered>
        <h2 className="h1">Familiar tools</h2>

        <CenteredBlock>
          <p>Artemis integrates with your existing version control system.</p>
        </CenteredBlock>

        <ContentSpacer />

        <SideBySide
          illustrationPosition="left"
          illustration={fleetSvg}
          css={bigFont}
          illustrationWidth={962}
          illustrationHeight={1180}
        >
          The state of your fleet is saved in your version control system. Reviews, rollbacks and rollouts are done
          through the tools you are familiar with.
        </SideBySide>
      </Section>

      <Section>
        <SideBySide
          illustration={overTheAirUpdatesSvg}
          illustrationPosition="left"
          illustrationWidth={394}
          illustrationHeight={666}
        >
          <h2 className="h1">Over-the-air updates</h2>
          The code for the Artemis cloud component
          is <a href="https://github.com/toitware/artemis-releases/tree/main/broker">open source</a>.
          You can run it on your own infrastructure, or use our hosted solution.
        </SideBySide>
      </Section>

      <Section
        centered
        css={css`
          background: ${golden.string()};
        `}
      >
        <h2>Get started with Artemis</h2>
        {/* <p
          css={css`
            max-width: 18em;
            margin: 3rem auto;
          `}
        >
          Manage your fleet.
        </p> */}
          <ArtemisButton />
      </Section>
    </Layout>
  );
}
export default ArtemisPage;
