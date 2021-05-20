import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import codeSampleSvg from "../assets/images/code-sample.svg";
import consoleSvg from "../assets/images/console.svg";
import RobustSandboxingSvg from "../assets/images/icons/robust-sandboxing.inline.svg";
import SecureCommunicationsSvg from "../assets/images/icons/secure-communications.inline.svg";
import ArrowLeftSvg from "../assets/images/illustrations/arrow-left.inline.svg";
import ArrowRightSvg from "../assets/images/illustrations/arrow-right.inline.svg";
import BeltOnlySvg from "../assets/images/illustrations/belt-only.svg";
import BeltSvg from "../assets/images/illustrations/belt.svg";
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
import SignUpButton from "../components/sign-up-button";
import { black, golden } from "../theme";

const Hero = styled.section`
  position: relative;
  background: ${golden.string()};
  text-align: center;
  p {
    display: block;
    max-width: 26em;
    margin: 3rem auto;
    padding-left: var(--contentPadding);
    padding-right: var(--contentPadding);
  }
`;

const H1 = styled.h1`
  display: block;
  max-width: 16em;
  margin: 3rem 0;
`;

export function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Hero
        css={css`
          overflow: hidden;
        `}
      >
        <PageTitle
          title="The best software platform for IoT"
          css={css`
            border-bottom: 2px solid ${black.string()};
          `}
        />
        <p css={[bigFont]}>
          We make it as easy to create software for microcontrollers as it is to build a mobile app.
        </p>
        <p>
          <SignUpButton />
        </p>

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
          Continuous firmware delivery
        </H1>

        <SideBySide illustration={GreenhouseSvg}>
          <p css={bigFont}>
            Continuously update the code on your microcontrollers even over cellular connections. Monitor and securely
            service your devices in production; all through the Toit API.
          </p>
          <SignUpButton />
        </SideBySide>
      </Section>
      <Section
        css={[
          darkSection,
          css`
            overflow: hidden;
          `,
        ]}
      >
        <ParagraphHeader title="Fast and safe" subtitle="Modular applications for embedded devices">
          Write your applications in our high-level, memory-safe language and let our battery-optimized virtual machine
          execute them efficiently on your microcontrollers. Fast to develop, safe to run.
        </ParagraphHeader>

        <div
          css={css`
            text-align: center;
          `}
        >
          <img
            src={BeltOnlySvg}
            css={css`
              margin: ${clampBuilder("small", "huge", 4.5, 12)} 0;
              @media (min-width: 550px) {
                display: none;
              }
            `}
          />
          <img
            src={BeltSvg}
            css={css`
              margin: ${clampBuilder("small", "huge", 4.5, 12)} 0;
              @media (max-width: 549px) {
                display: none;
              }
            `}
          />

          <FeaturesContainer>
            <FeatureBox title="Robust sandboxing" icon={<RobustSandboxingSvg />} position="left">
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
          <H1>Keep your keys</H1>
          <p>
            You own your data and you get to store it wherever you want. We help you get your data to and from your
            devices. It is as simple as that.
          </p>
          <p>
            Deploy code, access logs, update firmware, and collect data from your devices. Use the data in your own
            system, share it with your customers. We just handle your microcontrollers.
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
            Toit is a modern object-oriented language designed specifically for IoT.
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

        <ContentSpacer />
        <ContentSpacer />

        <SideBySide illustration={SymbolsSvg} illustrationPosition="left">
          <p>
            <strong>Toit gives you a modern, memory-safe language.</strong> It includes state of the art editor
            integration including syntax highlighting, goto-definitions, and auto completions.
          </p>

          <p>
            Deploying code on your device takes just a second, with no need to flash the device, not minutes like you
            normally see for microcontrollers.
          </p>
        </SideBySide>

        <ContentSpacer />
        <ContentSpacer />

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
