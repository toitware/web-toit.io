import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ArrowColumn from "../../assets/images/illustrations/arrow-column.inline.svg";
import controllerBigSvg from "../../assets/images/illustrations/controller-big.svg";
import controllerSmallSvg from "../../assets/images/illustrations/controller-small.svg";
import hackadayLogoSrc from "../../assets/images/logos/hackaday.svg";
import hacksterLogoSrc from "../../assets/images/logos/hackster.svg";
import { ButtonLink } from "../../components/button";
import ContentSpacer from "../../components/ContentSpacer";
import { bigFont, breakpoints, clampBuilder, darkSection } from "../../components/global-css";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import Link from "../../components/link";
import ExternalBlogs from "../../components/sections/external-blogs";
import ToitTeam from "../../components/sections/toit-team";
import { black, white } from "../../theme";

export function AboutPage(): JSX.Element {
  return (
    <Layout
      title="About the company and our team"
      description="Toit makes software development on the ESP32 easy. Our founders previously built the V8 engine for Google Chrome and the Dart programming language."
    >
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
        css={css`
          padding-top: 4.5rem;
        `}
      >
        <SideBySide
          illustration={
            <div>
              <Link href="https://www.google.com/googlebooks/chrome/big_12.html">
                <StaticImage
                  css={css`
                    display: block;
                  `}
                  placeholder="blurred"
                  src="../../assets/images/illustrations/comic.png"
                  alt="Comic Strip - Words by the Google Chrome team, comics adaptation by Scott McCloud"
                />
              </Link>
              <small
                css={css`
                  display: block;
                  text-align: center;
                  opacity: 0.5;
                `}
              >
                Words by the Google Chrome team. Comics adaptation by Scott McCloud.
              </small>
            </div>
          }
          illustrationPosition="left"
        >
          <h2>First Chrome V8</h2>
          <p>Do you remember when your browser crashed because you had opened one too many tabs?</p>
          <p>
            The founders from Toit fixed that by building the <Link href="https://v8.dev/">V8 JavaScript engine</Link>{" "}
            for Google Chrome.
          </p>
        </SideBySide>
        <ContentSpacer preventLine={true} />
        <SideBySide
          illustration={
            <StaticImage
              css={css`
                display: block;
              `}
              placeholder="blurred"
              src="../../assets/images/illustrations/dart.png"
              alt="Dart programming language illustration"
            />
          }
        >
          <h2>Then Dart</h2>
          <p>
            Or do you remember when you had to write your app in 3 different languages so it would work on mobile,
            desktop, and web?
          </p>

          <p>
            The founders from Toit fixed that by creating the <Link href="https://dart.dev/">Dart language</Link>, the{" "}
            <Link href="https://octoverse.github.com/2019/">fastest-growing programming language in 2019</Link> because
            of its adoption by <Link href="https://flutter.dev/">Flutter</Link>, Google’s UI toolkit for building
            applications.
          </p>
        </SideBySide>
        <ContentSpacer preventLine={true} />
        <h2
          css={css`
            text-align: center;
          `}
        >
          And now Toit
        </h2>
        <CenteredBlock
          css={css`
            text-align: left;
          `}
        >
          <p>
            Strong from their virtual machine and programming languages successes, these engineers - and the rest of the
            ever-growing Toit team - have now built Toit, a cloud-managed container platform for IoT.
          </p>
          <p>
            So now developers can say “Remember when we had to send the whole image of our firmware over-the-air at
            once?” or “Remember when we could brick devices with just one typo in our code?”
          </p>
        </CenteredBlock>
      </Section>
      <Section centered>
        <h1>Meet the founders</h1>
        <ToitTeam
          css={css`
            margin-top: var(--sectionVerticalPadding);
          `}
          people={[
            {
              name: "Kasper Lund",
              image: (
                <StaticImage
                  placeholder="blurred"
                  src="../../assets/images/team/kasper.png"
                  alt="Kasper Lund"
                  width={256}
                  height={256}
                />
              ),
              description: (
                <div>
                  Kasper Lund spent 12 years at Google as a senior staff engineer and site lead. He co-founded the{" "}
                  <Link href="https://en.wikipedia.org/wiki/Chrome_V8%22">V8</Link> and{" "}
                  <Link href="https://en.wikipedia.org/wiki/Dart_(programming_language)">Dart</Link> projects, and led
                  the team that brought{" "}
                  <Link href="https://blog.chromium.org/2010/12/new-crankshaft-for-v8.html">
                    adaptive optimizations to JavaScript
                  </Link>
                  , finally making the web fast.
                </div>
              ),
            },
            {
              name: "Erik Corry",
              image: (
                <StaticImage
                  placeholder="blurred"
                  src="../../assets/images/team/erik.png"
                  alt="Erik Corry"
                  width={256}
                  height={256}
                />
              ),
              description: (
                <div>
                  Erik Corry was one of the early Google engineers on{" "}
                  <Link href="https://en.wikipedia.org/wiki/Chrome_V8%22">V8</Link>, the engine behind Chrome and later{" "}
                  <Link href="https://nodejs.org">Node.js</Link>. He is an expert on{" "}
                  <Link href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)">
                    garbage collectors
                  </Link>{" "}
                  and the co-author of the{" "}
                  <Link href="https://blog.chromium.org/2009/02/irregexp-google-chromes-new-regexp.html">
                    fastest regular expression engine
                  </Link>{" "}
                  in the world.
                </div>
              ),
            },
            {
              name: "Florian Loitsch",
              image: (
                <StaticImage
                  placeholder="blurred"
                  src="../../assets/images/team/florian.png"
                  alt="Florian Loitsch"
                  width={256}
                  height={256}
                />
              ),
              description: (
                <div>
                  Florian Loitsch is a programming language and compiler specialist. He was the tech lead for the
                  business critical{" "}
                  <Link href="https://webdev.dartlang.org/tools/dart2js">Dart-to-JavaScript compiler</Link> at Google
                  and in charge of the evolution of the{" "}
                  <Link href="https://en.wikipedia.org/wiki/Dart_(programming_language)">Dart language</Link>.
                </div>
              ),
            },
            {
              name: "Anders Johnsen",
              image: (
                <StaticImage
                  placeholder="blurred"
                  src="../../assets/images/team/anders.png"
                  alt="Anders Johnsen"
                  width={256}
                  height={256}
                />
              ),
              description: (
                <div>
                  Anders Johnsen is an infrastructure and scalability wizard. He was tech lead for Uber’s micro-service
                  scheduling platform and{" "}
                  <Link href="https://eng.uber.com/schemaless-part-one/">scalable datastore</Link> and he worked on
                  optimizing server-side{" "}
                  <Link href="https://en.wikipedia.org/wiki/Dart_(programming_language)">Dart</Link> at Google.
                </div>
              ),
            },
          ]}
        />
        <StaticImage
          placeholder="blurred"
          src="../../assets/images/illustrations/team.jpg"
          alt="Anders Johnsen"
          css={css`
            width: 100%;
            max-width: 50rem !important;
            margin: var(--sectionVerticalPadding) auto 0 auto;
            display: block;
          `}
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
            The Toit team has built a software platform that lets you run containers on very small MCUs with{" "}
            <strong>as little as 500 KB of RAM</strong> - and in particular on ESP32 microcontrollers because we love
            their price/performance benefits.
          </p>
        </CenteredBlock>

        <CenteredBlock>
          <img src={controllerSmallSvg} />
        </CenteredBlock>

        <div
          css={css`
            text-align: left;
            @media (min-width: 600px) {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: ${clampBuilder("tiny", "huge", 4, 9)};
            }
          `}
        >
          <div>
            <p>
              With this platform, you can <strong>update</strong> the firmware layer and all the apps that run on it so
              that you will never need to flash an entire firmware image to a device anymore.
            </p>
            <p>
              The <strong>apps</strong> you run in your on-device containers work continuously and independently from
              each other at all times, even when you update the firmware or transfer your data to the cloud, and even
              when your devices are offline - so you can run devices on batteries for a very long time.
            </p>
          </div>
          <div>
            <p
              css={css`
                position: relative;
              `}
            >
              <ArrowColumn
                css={css`
                  position: absolute;
                  left: ${clampBuilder("small", "huge", -6, -7.5)};
                  top: 1.5rem;
                  ${breakpoints.smallDown} {
                    display: none;
                  }
                `}
              />
              For this to work on microcontrollers, Toit brings you a new high-level <strong>language</strong> designed
              for IoT. You will use it to build apps that communicate with the hardware to generate data. Transfer of
              the data to the cloud is handled out of the box using the Toit API.
            </p>
            <p>
              Finally, the team built an easy-to-use <strong>cloud-based management platform</strong> that takes care of
              updating your devices, visualizing your fleet health, and much more.
            </p>
          </div>
        </div>
        <ContentSpacer />
        <SideBySide illustration={controllerBigSvg}>
          <p>
            So when you sign up for Toit, you can start using our software on your own microcontroller-based hardware.
          </p>
          <p>
            Our <Link href="http://docs.toit.io">extensive technical documentation</Link> guides you from device
            provisioning with the Toit firmware, to writing apps with our high-level language, to deploying them
            over-the-air on any device from your fleet.
          </p>
        </SideBySide>

        <ContentSpacer />
        <CenteredBlock
          css={css`
            --centeredBlockWidth: ${clampBuilder("tiny", "huge", 30, 46)};
          `}
        >
          <p css={bigFont}>
            You can also always ask for help from our engineering team. We are proud of what we have built, and we are
            curious about what you want to do.
          </p>
          <ButtonLink
            variant="outlined"
            href="mailto:contact@toit.io"
            css={css`
              --buttonColor: ${white.string()};
              --buttonContrastColor: ${black.string()};
            `}
          >
            Let’s talk!
          </ButtonLink>
        </CenteredBlock>
      </Section>
      <Section centered>
        <h1>What they say about us</h1>
        <ExternalBlogs
          css={css`
            margin-top: 6rem;
          `}
        />
      </Section>
      <Section centered css={darkSection}>
        <h1>What they build with us</h1>

        <CenteredBlock>
          <p>
            Whether it&apos;s home security, a temperature controlled fan, Google Sheets integration of sensed data,
            driving a display, and more: people have built and written about it.
          </p>
        </CenteredBlock>
        <div
          css={css`
            display: flex;
            gap: 3rem;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            max-width: 40rem;
            margin: ${clampBuilder(400, 1200, 4.5, 9, { basis: "vh" })} auto;
          `}
        >
          <Link href="https://hackaday.io/search?term=toit">
            <img src={hackadayLogoSrc} alt="Hackaday Logo" />
          </Link>
          <Link href="https://www.hackster.io/search?i=projects&amp;q=toit">
            <img src={hacksterLogoSrc} alt="Hackster Logo" />
          </Link>
          {/* <Link href="https://www.instructables.com/howto/toit/">
            <img src={instructablesLogoSrc} alt="Instructables Logo" />
          </Link> */}
        </div>
        <CenteredBlock
          css={css`
            max-width: 38em;
          `}
        >
          <p css={bigFont}>
            Head over to <Link href="https://hackaday.io/search?term=toit">hackaday.io</Link>,{" "}
            <Link href="https://www.hackster.io/search?i=projects&amp;q=toit">hackster.io</Link>,{" "}
            <Link href="https://www.instructables.com/howto/toit/">instructables.com</Link>, or{" "}
            <Link href="https://ekorau.com">ekorau.com</Link> to find detailed tutorials.
          </p>
        </CenteredBlock>
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
