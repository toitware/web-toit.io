import { css } from "@emotion/react";
import React from "react";
import ToitLogo from "../../assets/images/toit-logo.inline.svg";
import ContentSpacer from "../../components/ContentSpacer";
import { bigFont } from "../../components/global-css";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import { black, dart, golden, passion, python, white } from "../../theme";

export function AboutPage(): JSX.Element {
  return (
    <Layout title="About">
      <PageTitle
        css={css`
          h1 {
            max-width: 15em;
          }
        `}
        title="We are building the software platform for IoT"
        subTitle="About"
      />

      <Section centered>
        <h2>Microcontrollers are everywhere</h2>
        <CenteredBlock css={bigFont}>
          They sit inside most modern industrial applications and home appliances. A modern car has more than 30, and
          over 30 billion are sold each year. They cost just a few dollars or less, are the size of a fingernail, and
          can run for years on batteries.
        </CenteredBlock>
      </Section>

      <Section
        centered
        css={css`
          background-color: ${black.string()};
          color: ${white.string()};
          --centeredBlockWidth: 43rem;
        `}
      >
        <h1>The current climate</h1>

        <CenteredBlock
          css={css`
            text-align: left;
          `}
        >
          <p>
            In the last 5 years, microcontrollers have rapidly improved. Previously, they could only run a single
            predefined calculation, now they are powerful enough to process images or run neural networks. They are also
            getting connected to the internet with new cheap and low-powered WiFi and cellular technologies.
          </p>

          <p>
            <strong>
              Nonetheless, until now, software development for microcontrollers has been stuck in the stone age.
            </strong>{" "}
            Updating software on a microcontroller is risky and hard and a single bug anywhere in your code could break
            your entire device. Because of that, software on microcontrollers is kept at a minimum and all code is
            written before shipping the device, never to be touched again.
          </p>
        </CenteredBlock>

        <ContentSpacer />

        <h1>What&apos;s changed?</h1>

        <CenteredBlock
          css={css`
            text-align: left;
          `}
        >
          <p>
            <strong>
              With our platform, developers can easily build applications while our platform ensures that the device
              keeps functioning no matter what.
            </strong>{" "}
            This is unleashing the creativity of software developers building with microcontrollers, letting them create
            groundbreaking products that touch the physical world.
          </p>
        </CenteredBlock>

        <ContentSpacer />

        <CenteredBlock
          css={css`
            text-align: left;
          `}
        >
          <ToitLogo
            css={css`
              display: block;
              width: 196px;
              height: auto;
              margin: 6rem auto 4.5rem;
            `}
          />
          <p>
            Toit was founded in{" "}
            <span
              css={css`
                color: ${dart.string()};
              `}
            >
              2018
            </span>{" "}
            by the team of developers that built{" "}
            <span
              css={css`
                color: ${golden.string()};
              `}
            >
              V8 for Chrome at Google
            </span>
            . We work remotely or from our office in{" "}
            <span
              css={css`
                color: ${passion.string()};
              `}
            >
              Aarhus, Denmark
            </span>
            . We are backed by{" "}
            <span
              css={css`
                color: ${python.string()};
              `}
            >
              Creandum
            </span>
            , one of Europe’s leading early-stage venture capital firms.
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
