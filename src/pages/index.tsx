import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import BeltSvg from "../assets/images/illustrations/belt.svg";
import GreenhouseSvg from "../assets/images/illustrations/greenhouse.svg";
import KeysSvg from "../assets/images/illustrations/keys.svg";
import ThermostatSvg from "../assets/images/illustrations/thermostat.svg";
import ControlCenterSvg from "../assets/images/illustrations/control-center.svg";
import SymbolsSvg from "../assets/images/illustrations/symbols.svg";
import RobustSandboxingSvg from "../assets/images/icons/robust-sandboxing.inline.svg";
import SecureCommunicationsSvg from "../assets/images/icons/secure-communications.inline.svg";
import WeatherBalloonMp4 from "../assets/images/illustrations/weather-balloon.mp4";
import ConsoleSvg from "../assets/images/console.svg";
import { breakpoints } from "../components/global-css";
import Layout from "../components/layout";
import ParagraphHeader from "../components/layout/ParagraphHeader";
import SideBySide from "../components/layout/SideBySide";
import { black, golden, white } from "../theme";
import Button, { ButtonLink } from "../components/button";
import CenteredBlock from "../components/layout/CenteredBlock";
import FeatureBox, { FeaturesContainer } from "../components/FeatureBox";

const Hero = styled.section`
  min-height: 30rem;
  background: ${golden.string()};
  padding-top: 4.5rem;
  text-align: center;
  ${breakpoints.small} {
    h1 {
      font-size: 2.75rem;
    }
  }
  ${breakpoints.medium} {
    h1 {
      font-size: 3rem;
    }
  }
  ${breakpoints.large} {
    h1 {
      font-size: 3.75rem;
    }
  }
  h1,
  p {
    display: block;
    max-width: 14em;
    margin: 3rem auto;
  }
  p {
    max-width: 24em;
  }
`;

const Section = styled.section`
  min-height: 30rem;
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  text-align: center;
  padding-left: max(var(--contentPadding), calc((100vw - var(--maxContentWidth)) / 2));
  padding-right: max(var(--contentPadding), calc((100vw - var(--maxContentWidth)) / 2));
`;

const H1 = styled.h1`
  display: block;
  max-width: 14em;
  margin: 3rem 0;
  &.centered {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Hero
        css={css`
          background-image: url("${ConsoleSvg}");
          background-repeat: no-repeat;
          background-position: center 200%;
          padding-bottom: 16rem;
          border-bottom: 2px solid ${black.string()};
        `}
      >
        <H1>The best software platform for IoT</H1>
        <hr />
        <p>We make it as easy to create software for microcontrollers as it is to build a mobile app.</p>
        <p>
          <Button>Start now</Button>
        </p>
      </Hero>
      <Section>
        <H1 className="centered">Continuous firmware delivery</H1>
        <SideBySide illustration={GreenhouseSvg}>
          <p>
            Continuously update the code on your microcontrollers even over cellular connections. Monitor and securely
            service your devices in production; all through the Toit API.
          </p>
          <Button>Start now</Button>
        </SideBySide>
      </Section>
      <Section
        css={css`
          background: ${black.string()};
          color: ${white.string()};
        `}
      >
        <ParagraphHeader title="Fast and safe" subtitle="Modular applications for embedded devices">
          Write your applications in our high-level, memory-safe language and let our battery-optimized virtual machine
          execute them efficiently on your microcontrollers. Fast to develop, safe to run.
        </ParagraphHeader>

        <div
          css={css`
            text-align: center;
            padding: 1.5rem 0;
          `}
        >
          <img src={BeltSvg} />

          <FeaturesContainer>
            <FeatureBox title="Robust sandboxing" icon={<RobustSandboxingSvg />}>
              Your applications run isolated from the system, and each other, on the devices.
            </FeatureBox>
            <FeatureBox title="Secure communications" icon={<SecureCommunicationsSvg />}>
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
        <SideBySide
          illustration={
            <video muted autoPlay loop playsInline>
              <source src={WeatherBalloonMp4} type="video/mp4" />
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
      <Section
        css={css`
          background: ${black.string()};
          color: ${white.string()};
        `}
      >
        <CenteredBlock>
          <H1>Built for software developers</H1>
          <p>
            If you have ever tried to write code for microcontrollers you know that it’s not a nice experience. You code
            in C, and a simple code change takes minutes to re-deploy.
          </p>
        </CenteredBlock>

        <SideBySide illustration={SymbolsSvg} illustrationPosition="left">
          <p>
            Toit gives you a modern, memory-safe language with state-of-the-art editor integrations that include syntax
            highlighting, goto definition, and auto completions among other things.
          </p>

          <p>
            Equally important, deploying code to your device takes just a second with no need to flash the device, and
            not minutes like you normally see for microcontrollers.
          </p>
        </SideBySide>

        <SideBySide illustration={ControlCenterSvg}>
          <h2>Control everything with our API</h2>
          <p>
            We don’t want to lock you into using our console. We don&apos;t want you to feel constrained by our command
            line tools. You are in full control of your devices and everything you can do with the Toit platform, you
            can do through our powerful API.
          </p>

          <p>
            Our programmatic API can be used from any environment and from any programming language. It is easy to
            integrate our platform into your products and turn your device fleet fully programmable.
          </p>
        </SideBySide>
      </Section>

      <CenteredBlock>
        <H1>Ready to get started?</H1>
        <p>Sign up for our platform and start your journey to invent the future.</p>
        <p>
          <Button>Start now</Button>
        </p>
      </CenteredBlock>
    </Layout>
  );
}
export default IndexPage;
