import { css } from "@emotion/react";
import React from "react";
import editorSvg from "../../assets/images/editor.svg";
import blocksVideo from "../../assets/images/illustrations/blocks.mp4";
import chipSvg from "../../assets/images/illustrations/chip.svg";
import overTheAirUpdatesSvg from "../../assets/images/illustrations/over-the-air-updates.svg";
import ContentSpacer from "../../components/ContentSpacer";
import { bigFont } from "../../components/global-css";
import HeroImage from "../../components/HeroImage";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import SignUpButton from "../../components/sign-up-button";
import VideoAutoPlay from "../../components/VideoAutoPlay";
import { pythonSecondary } from "../../theme";

export function DevicePage(): JSX.Element {
  return (
    <Layout
      title="High-level programming language on the ESP32"
      description="Code your apps for the ESP32 in the Toit language. Better performance than MicroPython. More robust and easier to use than C."
    >
      <PageTitle
        title="High-level language"
        subTitle="Device software"
        css={css`
          background: ${pythonSecondary.string()};
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
          <p css={bigFont}>Toit applications are written in the Toit language.</p>
          <SignUpButton />
        </CenteredBlock>

        <HeroImage containerHeightRem={18} image={editorSvg} width={1024} height={314} />
      </Section>
      <Section centered>
        <h2 className="h1">Why create a new language?</h2>

        <CenteredBlock>
          <p>
            Existing languages that can be used on microcontrollers are not very good. C has great performance but
            it&apos;s hard to learn, risky to use and even simple functionality takes a long time to build. MicroPython
            is easy to write but performance is so poor that it’s hardly usable. Oh, and it doesn’t really work like
            Python.
          </p>
        </CenteredBlock>

        <ContentSpacer />

        <SideBySide illustrationPosition="left" illustration={<VideoAutoPlay videoUrl={blocksVideo} />} css={bigFont}>
          Toit language is a high-level language that’s made to have a syntax very close to Python. As it’s built from
          first principles for microcontrollers, it’s at least 20x faster than MicroPython. We’ve also built a slick IDE
          integration.
        </SideBySide>
      </Section>

      <Section
        css={css`
          background-color: ${pythonSecondary.string()};
        `}
      >
        <SideBySide illustration={chipSvg}>
          <h2 className="h1">Virtual machine</h2>
          Your code runs as one or more applications inside the Toit virtual machine. The virtual machine creates a
          sandboxed environment for your code, so the worst that can happen from a bug is your application crashing. The
          system keeps running and so do your other applications.
        </SideBySide>
      </Section>

      <Section>
        <SideBySide illustration={overTheAirUpdatesSvg} illustrationPosition="left">
          <h2 className="h1">Over-the-air updates</h2>
          Updating your devices over the air is as easy on the Toit platform as it is to deploy new code to a web app,
          even on slow and shaky connections. The system even keeps running through the update.
        </SideBySide>
      </Section>
    </Layout>
  );
}
export default DevicePage;
