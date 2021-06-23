import { css } from "@emotion/react";
import React from "react";
import codeSampleSvg from "../../assets/images/code-sample.svg";
import fleetSvg from "../../assets/images/illustrations/fleet.svg";
import greenhouseSvg from "../../assets/images/illustrations/greenhouse.svg";
import microcontrollerSvg from "../../assets/images/illustrations/microcontroller.svg";
import ToitLogo from "../../assets/images/toit-logo.inline.svg";
import Button from "../../components/button";
import ContentSpacer from "../../components/ContentSpacer";
import { bigFont, clampBuilder, darkSection } from "../../components/global-css";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import Link from "../../components/link";
import TeamsSection from "../../components/sections/teams";
import { SignUpProvider, useSignUp } from "../../components/sign-up/context";
import { dartSecondary, pythonSecondary } from "../../theme";

export function RaspberryPage(): JSX.Element {
  return (
    <Layout title="Raspberry Pi" simplified>
      <SignUpProvider
        dialogTitle="Join the Toit Raspberry Pi beta"
        campaign="RasberryPi"
        targetUrl="https://console.toit.io/forms/raspberry_pi"
        redditTrack="Lead"
        trackingPixel="https://px.ads.linkedin.com/collect/?pid=3155756&conversionId=4472066&fmt=gif"
      >
        <Section
          css={css`
            border-top: none;
            padding-top: ${clampBuilder("small", "large", 0, 3)};
            background: ${pythonSecondary.string()};
          `}
        >
          <div
            css={css`
              margin-bottom: ${clampBuilder("small", "large", 3, 4.5)};
            `}
          >
            <Link to="/">
              <ToitLogo
                css={css`
                  width: ${clampBuilder("small", "large", 5.875, 8.75)};
                `}
              />
            </Link>
          </div>
          <SideBySide illustration={microcontrollerSvg}>
            <h1>50 KB code updates on Raspberry Pi</h1>
            <p>
              Tired of 200 MB code updates on your Raspberry Pi IoT device? Connect your Raspberry Pi to the Toit cloud
              and build serviceable and reliable apps with the best high-level language for IoT. You get full fleet
              management and your code updates are small and nimble enough to be sent across low-bandwidth cellular
              connections like NB-IoT or Cat-M1.
            </p>
            <p>
              <JoinTheBetaButton />
            </p>
          </SideBySide>
        </Section>
        <Section>
          <h1
            css={css`
              @media (min-width: 600px) {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
              }
              margin-bottom: ${clampBuilder("tiny", "large", 3, 12)};
            `}
          >
            Full serviceability on cellular connections
          </h1>
          <SideBySide illustration={greenhouseSvg}>
            <p>
              Update your code over a low-bandwidth cellular connection in 2 seconds instead of 10 minutes. Code updates
              via the Toit software platform are typically 50 KB or less, and they never fail. Even if the connection
              drops, the updates resume from where they left off.
            </p>
            <JoinTheBetaButton />
          </SideBySide>
        </Section>
        <Section
          css={css`
            background: ${dartSecondary.string()};
          `}
        >
          <SideBySide illustration={fleetSvg} illustrationPosition="left">
            <h1>Install on your existing fleet with zero risk</h1>
            <p>
              The entire Toit installation is just 1 MB. Put it on your existing devices next to the existing code.
              Experience how robust it is, and gradually move over your services at your own pace. If you decide it’s
              not for you, simply remove it again.
            </p>
          </SideBySide>
        </Section>
        <Section css={darkSection}>
          <CenteredBlock>
            <h1>Easily manage your sensor data</h1>
            <p css={bigFont}>
              Toit gives your Raspberry Pi direct access to peripherals through I2C, SPI, and UART. It is easy to gather
              data from sensors and access it through our cloud API from anywhere.
            </p>
          </CenteredBlock>
          <ContentSpacer />
          <SideBySide illustration={codeSampleSvg}>
            <h2>Use the same code across hardware platforms</h2>
            <p>
              Toit works just as great on the ESP32 microcontroller. If you want to swap your $30 Raspberry Pi with a $2
              ESP32 that can run for 2 years on batteries, you can bring all your Toit code with you. Finally, a
              hardware independent IoT platform!
            </p>
          </SideBySide>
        </Section>
        <TeamsSection />
      </SignUpProvider>
    </Layout>
  );
}

function JoinTheBetaButton(): JSX.Element {
  const signUpContext = useSignUp();
  return <Button onClick={() => signUpContext.dispatch("open")}>Join the beta</Button>;
}
export default RaspberryPage;
