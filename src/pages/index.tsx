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
import GreenhouseSvg from "../assets/images/illustrations/greenhouse.svg";
import KeysSvg from "../assets/images/illustrations/keys.svg";
import SymbolsSvg from "../assets/images/illustrations/symbols.svg";
import weatherBalloonMp4 from "../assets/images/illustrations/weather-balloon.mp4";
import { ButtonLink } from "../components/button";
import { Link } from "../components/link";
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
      title="Toit - high-level software platform for the ESP32"
      rawTitle
      description="Easily deploy high-level code to your ESP32 and run them in containers."
    >
      <Hero
        css={css`
          overflow: hidden;
        `}
      >
        <PageTitle
          title={<span>High-level code and containers on the ESP32</span>}
          css={css`
            border-bottom: 2px solid ${black.string()};
            h1 {
              max-width: 12em;
            }
          `}
        />
        <p css={[bigFont]}>
          Secure the services on your ESP32 microcontrollers with lightweight containers running on top of our robust
          open source technology. Built by <Link to="/company/about">the engineers</Link> behind the high-performance
          virtual machines that power <a href="https://www.google.com/chrome/">Google Chrome</a> and
          <a href="https://flutter.dev/">Flutter</a>.
        </p>
        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <SignUpButton />
        </div>

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
          Serviceability for your devices
        </H1>

        <SideBySide illustration={GreenhouseSvg} illustrationWidth={1505} illustrationHeight={1051}>
          <p css={bigFont}>
            Toit comes with robust support for continuously updating the code on your ESP32 microcontrollers even over
            cellular connections. Devices can be serviced remotely and their firmware, services, and configurations can
            be maintained over time.
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
            modules. Many of our users connect to the cloud via cellular modems using NB-IoT or LTE-M.
          </p>
        </CenteredBlock>

        <SideBySide
          illustrationPosition="left"
          illustration={
            <StaticImage
              placeholder="blurred"
              src="../assets/images/illustrations/bme280.png"
              width={1024}
              height={1024}
              alt="BME 280"
            />
          }
          illustrationWidth={1024}
          illustrationHeight={1024}
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
              Send your data to your cloud using standard protocols, such as HTTPS, MQTT, or CoAP.
            </FeatureBox>
          </FeaturesContainer>
        </div>
      </Section>
      <Section>
        <SideBySide illustration={KeysSvg} illustrationWidth={517} illustrationHeight={651}>
          <H1>Control your data</H1>
          <p>
            You own your data and you get to store it wherever you want. You feed data from your devices directly into
            your own cloud using HTTPS, MQTT, or CoAP, and the data never passes other servers. It is as simple as that.
          </p>
          <p>
            Deploy code, access logs, update firmware, and install applications on your devices. Let your data flow into
            your own cloud, share it with your customers. We just handle your microcontrollers.
          </p>
        </SideBySide>
        <ContentSpacer />
        <SideBySide
          illustration={
            <video muted autoPlay loop playsInline width="960" height="1320" disableRemotePlayback>
              <source src={weatherBalloonMp4} type="video/mp4" />
            </video>
          }
          illustrationPosition="left"
          illustrationWidth={960}
          illustrationHeight={1320}
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
            alt="Toit language code sample"
            src={codeSampleSvg}
            width="555"
            height="536"
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
              Learn more <span className="link-title">about the Toit programming language</span>
            </ButtonLink>
          </p>
        </SideBySide>
      </Section>
    </Layout>
  );
}
export default IndexPage;
