import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import codeSampleSvg from "../assets/images/code-sample.svg";
import consoleSvg from "../assets/images/console.svg";
import RobustSandboxingSvg from "../assets/images/icons/robust-sandboxing.inline.svg";
import SecureCommunicationsSvg from "../assets/images/icons/secure-communications.inline.svg";
import ArrowLeftSvg from "../assets/images/illustrations/arrow-left.inline.svg";
import ArrowRightSvg from "../assets/images/illustrations/arrow-right.inline.svg";
import ControlCenterSvg from "../assets/images/illustrations/control-center.svg";
import GreenhouseSvg from "../assets/images/illustrations/greenhouse.svg";
import KeysSvg from "../assets/images/illustrations/keys.svg";
import SymbolsSvg from "../assets/images/illustrations/symbols.svg";
import ThermostatSvg from "../assets/images/illustrations/thermostat.svg";
import weatherBalloonMp4 from "../assets/images/illustrations/weather-balloon.mp4";
import { ButtonLink } from "../components/button";
import ContentSpacer from "../components/ContentSpacer";
import FeatureBox, { FeaturesContainer } from "../components/FeatureBox";
import { bigFont, breakpoints, clampBuilder, darkSection } from "../components/global-css";
import HeroImage from "../components/HeroImage";
import Layout from "../components/layout";
import CenteredBlock from "../components/layout/CenteredBlock";
import PageTitle from "../components/layout/PageTitle";
import ParagraphHeader from "../components/layout/ParagraphHeader";
import Section from "../components/layout/Section";
import SideBySide from "../components/layout/SideBySide";
import RiveAnimation from "../components/RiveAnimation";
import TeamsSection from "../components/sections/teams";
import SignUpButton from "../components/sign-up-button";
import Tooltip from "../components/Tooltip";
import { black, dartSecondary, golden, white } from "../theme";

const Hero = styled.section`
  position: relative;
  background: ${golden.string()};
  text-align: center;
  p {
    display: block;
    max-width: 22em;
    margin: 3rem auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

// This h2 is posing as h1 for SEO purposes.
const H1 = styled.h2`
  font-size: var(--h1FontSize);
  display: block;
  max-width: 16em;
  margin: 3rem 0;
`;

export function IndexPage(): JSX.Element {
  return (
    <Layout
      title="Toit - IoT software platform for the ESP32"
      rawTitle
      description="Develop high-level software for your ESP32 microcontrollers with the Toit coding platform. Start your IoT project today with Toit."
      signUpText="Get access to our software development platform and start building your IoT solution on the ESP32."
    >
      <Hero
        css={css`
          overflow: hidden;
        `}
      >
        <PageTitle
          title={<span>IoT software platform for the ESP32</span>}
          css={css`
            border-bottom: 2px solid ${black.string()};
            h1 {
              max-width: 12em;
            }
          `}
        />
        <p css={[bigFont]}>
          Modern programming platform on embedded devices. Code your ESP32 microcontrollers with the Toit firmware.
        </p>
        <div>
          <SignUpButton />
        </div>

        <Tooltip
          css={css`
            margin: 1rem 0 3rem;
          `}
          hideTip
        >
          Free forever on 10 devices
        </Tooltip>

        <div
          css={css`
            position: relative;
            height: 0;
          `}
        >
          <ArrowLeftSvg
            css={css`
              position: absolute;
              right: 50%;
              margin-right: -36rem;
              bottom: 2rem;
            `}
          />
          <ArrowRightSvg
            css={css`
              position: absolute;
              left: 50%;
              margin-left: -40rem;
              bottom: 1rem;
            `}
          />
        </div>
        <HeroImage image={consoleSvg} width={979} height={662} />
      </Hero>
      <Section>
        <H1
          css={css`
            @media (min-width: 600px) {
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            }

            margin-bottom: ${clampBuilder("tiny", "large", 3, 12)};
          `}
        >
          Over the Air updates for your microcontrollers
        </H1>

        <SideBySide illustration={GreenhouseSvg} illustrationWidth={1505} illustrationHeight={1051}>
          <p css={bigFont}>
            Risk free OTA code updates of your ESP32-based devices with the Toit firmware. Full serviceability of your
            device fleet in production with our API.
          </p>
          <SignUpButton />
        </SideBySide>
      </Section>
      <Section
        centered
        css={css`
          background-color: ${dartSecondary.string()};
        `}
      >
        <h2 className="h1">Flexible connectivity</h2>

        <CenteredBlock>
          <p>
            Use the WiFi built into the ESP32, or use an external GSM module. LTE-M and NB-IoT are both popular with our
            customers.
          </p>
        </CenteredBlock>

        <SideBySide
          illustrationPosition="left"
          illustration={
            <StaticImage placeholder="blurred" src="../assets/images/illustrations/bme280.png" alt="BME 280" />
          }
          illustrationWidth={1024}
          illustrationHeight={1024}
        >
          <p>Connect any peripheral you want with the GPIO pins. Toit supports UART, I2C, I2S and SPI.</p>
          <p>
            Find the drivers you need with our package manager. If you find one missing, let us know, and we are ready
            to help you code it.
          </p>
        </SideBySide>
      </Section>
      <TeamsSection title="Happy Toit customers" />
      <Section
        css={[
          darkSection,
          css`
            overflow: hidden;
          `,
        ]}
      >
        <ParagraphHeader
          title="Open source programming language"
          subtitle="High-level software platform for embedded devices"
        >
          Toit is built on the <a href="https://github.com/toitlang/toit">Toit programming language</a>, a fast-growing
          open source language built for IoT. Toit language is a memory-safe, high-level coding language that executes
          your code in a virtual machine optimized for power consumption. Our customers run an ESP32 for years on 2 AA
          batteries.
        </ParagraphHeader>

        <div
          css={css`
            text-align: center;
          `}
        >
          <RiveAnimation
            width={1200}
            height={690}
            src="/animations/provision.riv"
            css={css`
              margin-bottom: ${clampBuilder("small", "huge", 4.5, 12)};
              max-width: 60rem;
              margin-left: auto;
              margin-right: auto;
            `}
          />

          <FeaturesContainer>
            <FeatureBox title="Isolated software applications" icon={<RobustSandboxingSvg />} position="left">
              The system is isolated from your code, and your applications are isolated from each other.
            </FeatureBox>
            <FeatureBox title="Built-in security" icon={<SecureCommunicationsSvg />} position="right">
              All communication is end-to-end encrypted. Finally a secure IoT platform.
            </FeatureBox>
          </FeaturesContainer>
        </div>
      </Section>
      <Section>
        <SideBySide illustration={KeysSvg} illustrationWidth={517} illustrationHeight={651}>
          <H1>Send your data to your cloud</H1>
          <p>
            Use HTTPS or MQTT to send your data directly from your devices to your own system, or use our built-in
            Pub/Sub. Deploy code, update firmware and monitor your devices. We take care of your ESP32 microcontrollers.
          </p>
        </SideBySide>
        <ContentSpacer />
        <SideBySide
          illustration={
            <video muted autoPlay loop playsInline width="960" height="1320">
              <source src={weatherBalloonMp4} type="video/mp4" />
            </video>
          }
          illustrationPosition="left"
          illustrationWidth={960}
          illustrationHeight={1320}
        >
          <h2>Deploy code with no risk</h2>

          <p>
            Bugs in embedded software development used to be catastrophic. With Toit, a bug in your code will only crash
            that one application. The system and your other applications keep running. Change and deploy new code with
            no risk.
          </p>
          <p>
            Toit makes embedded development like software development. Integrate your device into your continuous
            delivery pipeline and deploy new code every week instead of every year.
          </p>
          <p>
            <ButtonLink to="/product/device" variant="outlined">
              Learn more
            </ButtonLink>
          </p>
        </SideBySide>
        <ContentSpacer />
        <SideBySide illustration={ThermostatSvg} illustrationWidth={516} illustrationHeight={652}>
          <h2>Full serviceability for your fleet</h2>
          <p>
            Toit gives you a full overview of your production devices. A bug results in a stack trace that lets you fix
            it and redeploy in minutes.
          </p>
          <p>Group your devices and update all the devices in a group in one go.</p>
          <p>
            Communication to and from the device is end-to-end encrypted. Sleep well at night knowing that your devices
            and your data are safe.
          </p>
          <p>
            <ButtonLink to="/product/cloud" variant="outlined">
              Learn more
            </ButtonLink>
          </p>
        </SideBySide>
      </Section>
      <Section css={darkSection}>
        <CenteredBlock>
          <H1>Modern software platform</H1>
          <p css={bigFont}>
            Writing code for microcontrollers is not nice. You need to code in C, and deploying a simple code update
            takes several minutes.
          </p>
        </CenteredBlock>

        <ContentSpacer preventLine />

        <div
          css={css`
            text-align: center;
            ${breakpoints.medium} {
              text-align: left;
              display: flex;
              align-items: center;
            }
          `}
        >
          <p
            css={css`
              max-width: 20em;
              margin: 0 auto 3rem;
              ${breakpoints.medium} {
                width: 55%;
                font-family: "ClashDisplay", Verdana, sans-serif;
                font-size: 2.5rem;
                line-height: 1.5;
                padding-right: 3rem;
                margin-bottom: 0;
              }
            `}
          >
            Toit is an open source programming language designed for embedded devices
          </p>
          <img
            css={css`
              ${breakpoints.medium} {
                width: 45%;
              }
            `}
            src={codeSampleSvg}
          />
        </div>

        {/* <Editor
  editor={
    'import gpio\n\
\n\
main:\n\
  pin := gpio.Pin.out 21\n\
  print "Blinking 5 times ..."\n\
  5.repeat:\n\
    pin.set 1\n\
    sleep --ms=500\n\
    pin.set 0\n\
    sleep --ms=500\n\
  print "Blinking done!"'
  }
  terminal={[
    { Type: "Input", Content: "toit run main.toit" },
    { Type: "Output", Content: "<process initiated>", Time: "2021-01-26 09:48:19" },
    { Type: "Output", Content: "Blinking 5 times ...", Time: "2021-01-26 09:48:19" },
    { Type: "Wait", Wait: 5000 },
    { Type: "Output", Content: "Blinking done!", Time: "2021-01-26 09:48:24" },
    { Type: "Output", Content: "<process finished>", Time: "2021-01-26 09:48:24" },
  ]}
/> */}

        <ContentSpacer preventLine large />

        <SideBySide
          illustration={SymbolsSvg}
          illustrationPosition="left"
          illustrationWidth={365}
          illustrationHeight={266}
        >
          <p>
            <strong>Toit is a high-level object-oriented programming language</strong> built for IoT. It has full editor
            integration with auto completion, syntax highlighting and more.
          </p>

          <p>
            It takes only one second to deploy code to your ESP32. It all happens over the air, and you don’t need to
            flash your device. No more waiting minutes like you’re used to for embedded development.
          </p>

          <p>
            <ButtonLink
              css={css`
                --buttonColor: ${white.string()};
                --buttonContrastColor: ${black.string()};
              `}
              href="https://docs.toit.io/language/language"
              variant="outlined"
            >
              Learn more
            </ButtonLink>
          </p>
        </SideBySide>

        <ContentSpacer preventLine large />

        <SideBySide illustration={ControlCenterSvg} illustrationWidth={683} illustrationHeight={553}>
          <h2>API first</h2>

          <p>
            <strong>Our API lets you do everything you need.</strong> Download data from your devices, check the health
            of your microcontrollers, deploy new software, and view logs.
          </p>

          <p>Our API works with any programming language and is easy to integrate into your product.</p>
        </SideBySide>
      </Section>
    </Layout>
  );
}
export default IndexPage;
