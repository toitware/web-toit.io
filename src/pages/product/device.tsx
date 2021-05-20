import { css } from "@emotion/react";
import React from "react";
import editorSvg from "../../assets/images/editor.svg";
import blocksVideo from "../../assets/images/illustrations/blocks.mp4";
import boxesSvg from "../../assets/images/illustrations/boxes.svg";
import chipSvg from "../../assets/images/illustrations/chip.svg";
import microcontrollersSvg from "../../assets/images/illustrations/microcontrollers.svg";
import overTheAirUpdatesSvg from "../../assets/images/illustrations/over-the-air-updates.svg";
import ContentSpacer from "../../components/ContentSpacer";
import { bigFont, darkSection } from "../../components/global-css";
import HeroImage from "../../components/HeroImage";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import Link from "../../components/link";
import SignUpButton from "../../components/sign-up-button";
import VideoAutoPlay from "../../components/VideoAutoPlay";
import { pythonSecondary } from "../../theme";

export function DevicePage(): JSX.Element {
  return (
    <Layout title="Device">
      <PageTitle
        title="High-level language"
        subTitle="Device"
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

        <HeroImage containerHeightRem={18} image={editorSvg} imageWidth={979} />
      </Section>
      <Section centered>
        <h1>Why create a new language?</h1>

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
          <h1>Virtual machine</h1>
          Your code runs as one or more applications inside the Toit virtual machine. The virtual machine creates a
          sandboxed environment for your code, so the worst that can happen from a bug is your application crashing. The
          system keeps running and so do your other applications.
        </SideBySide>
      </Section>

      <Section>
        <SideBySide illustration={boxesSvg} illustrationPosition="left">
          <h1>Out-of-the-box drivers</h1>

          <p>
            The Toit ecosystem comes with ready-to-use drivers for many of the commonly used peripherals, including GSM
            modules, sensors and actuators. They can be accessed directly from Toit using our package manager.
          </p>

          <p>
            And don’t worry if the driver for your favorite sensor is not available yet, it&apos;s really easy to write
            your own in the Toit language.
          </p>
        </SideBySide>

        <ContentSpacer />

        <SideBySide illustration={overTheAirUpdatesSvg} illustrationPosition="right">
          <h1>Over-the-air updates</h1>
          Updating your devices over the air is as easy on the Toit platform as it is to deploy new code to a web app,
          even on slow and shaky connections. The system even keeps running through the update.
        </SideBySide>
      </Section>

      <Section centered css={darkSection}>
        <h1>Micro&shy;controllers</h1>

        <CenteredBlock>
          <p>
            Toit runs on the ESP32 chip from Espressif. We chose the ESP32 because it offers the best price /
            performance out of all the microcontrollers out there. For $2 or less you get 512 kB RAM, built-in WiFi and
            34 pins for peripherals that you can use in any way you want.
          </p>
        </CenteredBlock>

        <p>
          <strong>
            You can buy them{" "}
            <Link href="https://www.digikey.com/en/products/detail/espressif-systems/ESP32-DEVKITC-32D/9356990">
              here
            </Link>
            .
          </strong>
        </p>

        <ContentSpacer />

        <img src={microcontrollersSvg} />
      </Section>
    </Layout>
  );
}
export default DevicePage;
