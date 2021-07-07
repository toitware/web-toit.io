import { css } from "@emotion/react";
import React from "react";
import comicPng from "../../assets/images/comic.png";
import dartGraphSvg from "../../assets/images/dart-graph.svg";
import controllerBigSvg from "../../assets/images/illustrations/controller-big.svg";
import controllerSmallSvg from "../../assets/images/illustrations/controller-small.svg";
import andersPng from "../../assets/images/team/anders.png";
import erikPng from "../../assets/images/team/erik.png";
import florianPng from "../../assets/images/team/florian.png";
import kasperPng from "../../assets/images/team/kasper.png";
import ContentSpacer from "../../components/ContentSpacer";
import { bigFont, clampBuilder, darkSection } from "../../components/global-css";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import ExternalBlogs from "../../components/sections/external-blogs";
import QuotesSection from "../../components/sections/quotes";
import ToitTeam from "../../components/sections/toit-team";

export function AboutPage(): JSX.Element {
  return (
    <Layout title="About">
      <PageTitle
        css={css`
          h1 {
            max-width: 15em;
          }
        `}
        title="Who we are"
        subTitle="About"
      />

      <Section
        centered
        css={css`
          padding-bottom: 0;
        `}
      >
        <CenteredBlock css={bigFont}>
          Do you remember when your browser crashed because you had opened one too many tabs? The founders from Toit
          fixed that by building the V8 JavaScript engine for Google Chrome.
        </CenteredBlock>
        <CenteredBlock>
          <img
            css={css`
              width: calc(472px / 2);
              height: calc(732px / 2);
            `}
            src={comicPng}
            alt="Comic Strip"
          />
        </CenteredBlock>
      </Section>
      <Section
        css={css`
          border-top: 0;
          padding-top: 0;
        `}
      >
        <img
          css={css`
            position: absolute;
            top: ${clampBuilder(400, 1500, 8, -10)};
            width: 100%;
            left: 0;
          `}
          src={dartGraphSvg}
          alt="Dart graph"
        />
        <CenteredBlock>
          Or do you remember when you had to write your app in 3 different languages so it would work on mobile,
          desktop, and web? The founders from Toit fixed that by creating the Dart language, now used in Flutter - and
          also the fastest-growing programming language in 2019.
        </CenteredBlock>

        <ContentSpacer preventLine={true} />

        <CenteredBlock>
          Strong from their virtual machine and programming languages successes, these engineers - and the rest of the
          ever-growing Toit team - have now built Toit, a cloud-managed container platform for IoT that allows
          developers to say “Remember when we had to send the whole image of our firmware over-the-air at once?” or
          “Remember when we could brick devices with just one typo in our code?”
        </CenteredBlock>
      </Section>
      <Section>
        <ToitTeam
          people={[
            {
              name: "Kasper Lund",
              image: kasperPng,
              description:
                "Kasper Lund spent 12 years at Google as a senior staff engineer and site lead. He co-founded the V8 and Dart projects, and led the team that brought adaptive optimizations to JavaScript, finally making the web fast.",
            },
            {
              name: "Erik Corry",
              image: erikPng,
              description:
                "Erik Corry was one of the early Google engineers on V8, the engine behind Chrome and later Node.js. He is an expert on garbage collectors and the co-author of the fastest regular expression engine in the world.",
            },
            {
              name: "Florian Loitsch",
              image: florianPng,
              description:
                "Florian Loitsch is a programming language and compiler specialist. He was the tech lead for the business critical Dart-to-JavaScript compiler at Google and in charge of the evolution of the Dart language.",
            },
            {
              name: "Anders Johnsen",
              image: andersPng,
              description:
                "Anders Johnsen is an infrastructure and scalability wizard. He was tech lead for Uber’s micro-service Dart at Google.",
            },
          ]}
        />
      </Section>
      <Section
        centered
        css={[
          darkSection,
          css`
            --centeredBlockWidth: 43rem;
          `,
        ]}
      >
        <h1>What we built</h1>

        <CenteredBlock
          css={css`
            text-align: left;
          `}
        >
          <p>
            The Toit team has built a software platform that lets you run containers on very small MCUs with as little
            as 500 KB of RAM - and in particular on ESP32 microcontrollers because of their price and performance
            benefits.
          </p>
          <p>
            With this platform, you can update the firmware layer and/or all the apps that run on it so that you will
            never need to flash an entire firmware image to a device anymore. The apps you run in your on-device
            containers work continuously and independently from each other at all times, even when you update the
            firmware or transfer your data to the cloud.
          </p>
        </CenteredBlock>

        <ContentSpacer />

        <SideBySide illustration={controllerSmallSvg} illustrationPosition="right">
          <p>
            For this to work on microcontrollers, Toit brings you a new high-level language designed for IoT. You will
            use it to build apps that communicate with your low-level hardware and communicate with the cloud using the
            Toit API.
          </p>
        </SideBySide>
        <ContentSpacer />
        <SideBySide illustration={controllerBigSvg} illustrationPosition="left">
          <p>
            Finally, the team built an easy-to-use cloud-based management platform that takes care of updating your
            devices, visualizing your fleet health, and much more.
          </p>

          <p>
            So when you sign up for Toit, you can start using our software on your own microcontroller-based hardware
            and our extensive technical documentation tells you how to provision your microcontroller with the Toit
            firmware, start writing apps with our high-level language and deploy them over-the-air on the device.
          </p>
        </SideBySide>

        <ContentSpacer />
        <CenteredBlock css={bigFont}>
          You can also always ask for help from our engineering team. We are proud of what we have designed, and we are
          curious about what you want to do. Let’s talk!
        </CenteredBlock>
      </Section>
      <Section centered>
        <h1>What they say about us</h1>
      </Section>
      <QuotesSection
        css={css`
          border-top: none;
          padding-top: 0;
          padding-bottom: 0;
        `}
      />
      <Section
        css={css`
          border-top: none;
        `}
        centered
      >
        <ExternalBlogs
          css={css`
            margin-top: 6rem;
          `}
        />
      </Section>
      <Section centered>
        <CenteredBlock>
          <p>Are you interested in joining the team building the next big computing platform?</p>
          <p>
            Reach out at <a href="mailto:jobs@toit.io">jobs@toit.io</a>.
          </p>
        </CenteredBlock>
      </Section>
    </Layout>
  );
}

export default AboutPage;
