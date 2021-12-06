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
      description="The Toit software platform makes it easy to deploy high-level code on the ESP32. Sign up for Toit and get started on your IoT project."
    >
      <Hero
        css={css`
          overflow: hidden;
        `}
      >
        <PageTitle
          title={<span>Cloud-managed containers on the ESP32</span>}
          css={css`
            border-bottom: 2px solid ${black.string()};
            h1 {
              max-width: 12em;
            }
          `}
        />
        <p css={[bigFont]}>
          Secure the code on your ESP32 microcontrollers with lightweight containers and orchestrate them through our
          cloud API.
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
        <HeroImage image={consoleSvg} imageWidth={979} />
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
          Full serviceability for your fleet
        </H1>

        <SideBySide illustration={GreenhouseSvg}>
          <p css={bigFont}>
            Continuously update the code on your ESP32 microcontrollers even over cellular connections. Monitor and
            securely service your entire device fleet in production; all through the Toit API.
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
        <h2 className="h1">Connectivity and peripherals</h2>

        <CenteredBlock>
          <p>
            Toit supports the ESP32’s built-in WiFi, but we also support the most common external communications
            modules. Many of our customers connect to the cloud via cellular modems using NB-IoT or LTE-M.
          </p>
        </CenteredBlock>

        <SideBySide
          illustrationPosition="left"
          illustration={
            <StaticImage placeholder="blurred" src="../assets/images/illustrations/bme280.png" alt="BME 280" />
          }
        >
          <p>
            We let you control any peripheral you plug into your ESP32 through the GPIO pins. You can connect using the
            I2C, SPI, I2S or UART protocols.
          </p>
          <p>
            Our package manager gives you access to drivers for many commonly used peripherals like sensors and motors,
            and if you’re missing one, our engineering team is ready to help you write it.
          </p>
        </SideBySide>
      </Section>
      <TeamsSection />
      <Section
        css={[
          darkSection,
          css`
            overflow: hidden;
          `,
        ]}
      >
        <ParagraphHeader title="Fast and safe" subtitle="Modular applications for embedded devices">
          Our platform is built on the free and open source <a href="https://github.com/toitlang/toit">Toit language</a>
          , so you write your applications in a high-level, memory-safe language and let the battery-optimized virtual
          machine execute them efficiently on your ESP32s. Fast to develop, safe to run.
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
            <FeatureBox title="Sandboxed containers" icon={<RobustSandboxingSvg />} position="left">
              Your applications run isolated from the system, and each other, on the devices.
            </FeatureBox>
            <FeatureBox title="Secure communications" icon={<SecureCommunicationsSvg />} position="right">
              Communicate with our cloud through a simple API, we take care of the rest.
            </FeatureBox>
          </FeaturesContainer>
        </div>
      </Section>
      <Section>
        <SideBySide illustration={KeysSvg}>
          <H1>Control your data</H1>
          <p>
            You own your data and you get to store it wherever you want. Feed data from your devices directly into your
            own system using HTTPS or MQTT, or let us help you get your bits to and from your devices. It is as simple
            as that.
          </p>
          <p>
            Deploy code, access logs, update firmware, and install applications on your devices. Let your data flow into
            your own system, share it with your customers. We just handle your microcontrollers.
          </p>
        </SideBySide>
        <ContentSpacer />
        <SideBySide
          illustration={
            <video muted autoPlay loop playsInline>
              <source src={weatherBalloonMp4} type="video/mp4" />
            </video>
          }
          illustrationPosition="left"
        >
          <h2>Risk-free code deployment</h2>

          <p>
            No matter which bug slips into your code, the worst it can do is crash that one application. The system, as
            well as all your other applications, keeps running as if nothing had happened. This makes changing and
            deploying new code risk-free.
          </p>
          <p>
            Treat firmware and drivers as you treat software. Set up a continuous delivery pipeline and deploy new
            device code on every commit.
          </p>
          <p>
            <ButtonLink to="/product/device" variant="outlined">
              Learn more
            </ButtonLink>
          </p>
        </SideBySide>
        <ContentSpacer />
        <SideBySide illustration={ThermostatSvg}>
          <h2>Monitor and service your devices in production</h2>
          <p>
            Get full visibility into your device fleet with logs covering connectivity, code execution, and crash
            reports. Trace the bug, fix it and redeploy, all within minutes.
          </p>
          <p>Assign your devices into groups and deploy updates on a group by group basis. </p>
          <p>
            All communication is end-to-end encrypted using modern public-key cryptography. The same technology that
            keeps the internet secure keeps your devices and data safe.
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
          <H1>Built for software developers</H1>
          <p css={bigFont}>
            If you have ever tried to write code for microcontrollers you know that it’s not a nice experience. You code
            in C, and a simple code change takes minutes to re-deploy.
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
            Toit is a free and open source object-oriented language designed specifically for IoT
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

        <SideBySide illustration={SymbolsSvg} illustrationPosition="left">
          <p>
            <strong>Toit is a modern, memory-safe language.</strong> It includes state of the art editor integration
            including syntax highlighting, goto-definitions, and auto completions.
          </p>

          <p>
            Deploying code on your device takes just a second, with no need to flash the device, not minutes like you
            normally see for microcontrollers.
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

        <SideBySide illustration={ControlCenterSvg}>
          <h2>Control everything with our API</h2>

          <p>
            We don&apos;t want to lock you into using our console. We don&apos;t want you to feel constrained by our
            command line tools.{" "}
            <strong>
              You are in full control of your devices and everything you can do with the Toit platform, you can do
              through our powerful API.
            </strong>
          </p>

          <p>
            Our programmatic API can be used from any environment and from any programming language. It is easy to
            integrate our platform into your products and turn your device fleet fully programmable.
          </p>
        </SideBySide>
      </Section>
    </Layout>
  );
}
export default IndexPage;
