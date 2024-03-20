import { css } from "@emotion/react";
import React from "react";
import editor from "../../assets/images/code-toit.png";
import blocksVideo from "../../assets/images/illustrations/blocks.mp4";
import chipSvg from "../../assets/images/illustrations/chip.svg";
import symbolsSvg from "../../assets/images/illustrations/symbols.svg";
import ContentSpacer from "../../components/ContentSpacer";
import HeroImage from "../../components/HeroImage";
import VideoAutoPlay from "../../components/VideoAutoPlay";
import { bigFont } from "../../components/global-css";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import SignUpButton from "../../components/sign-up-button";
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

        <HeroImage containerHeightRem={18} image={editor} width={1024} height={602} />
      </Section>
      <Section centered>
        <h2 className="h1">Why create a new language?</h2>

        <CenteredBlock>
          <p>
            Existing languages that can be used on microcontrollers are not very good. C has great performance but
            it&apos;s hard to learn, risky to use and even simple functionality takes a long time to build. MicroPython
            is easy to write but performance is so poor that it&apos;s hardly usable. Oh, and it doesn&apos;t really
            work like Python.
          </p>
        </CenteredBlock>

        <ContentSpacer />

        <SideBySide
          illustrationPosition="left"
          illustration={<VideoAutoPlay videoUrl={blocksVideo} />}
          css={bigFont}
          illustrationWidth={962}
          illustrationHeight={1180}
        >
          Toit language is a high-level language that&apos;s made to have a syntax very close to Python. As it&apos;s
          built from first principles for microcontrollers, it&apos;s at least 20x faster than MicroPython. We&apos;ve
          also built a slick IDE integration.
        </SideBySide>
      </Section>

      <Section
        css={css`
          background-color: ${pythonSecondary.string()};
        `}
      >
        <SideBySide illustration={chipSvg} illustrationWidth={663} illustrationHeight={449}>
          <h2 className="h1">Virtual machine</h2>
          Your code runs as one or more applications inside the Toit virtual machine. The virtual machine creates a
          sandboxed environment for your code, so the worst that can happen from a bug is your application crashing. The
          system keeps running and so do your other applications.
        </SideBySide>
      </Section>

      <Section>
        <SideBySide
          illustrationPosition="left"
          illustration={symbolsSvg}
          css={bigFont}
          illustrationWidth={962}
          illustrationHeight={1180}
        >
          <h2 className="h1">Learn more</h2>
          Find more information about the Toit language at <a href="https://toitlang.org">toitlang.org</a>, or read
          the <a href="https://docs.toit.io/">documentation</a>.
          The <a href="https://docs.toit.io/tutorials">tutorials</a> section is a great place to start and learn
          how Toit looks and feels.
        </SideBySide>
      </Section>
    </Layout>
  );
}
export default DevicePage;
