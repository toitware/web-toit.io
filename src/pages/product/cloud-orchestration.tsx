import { css } from "@emotion/react";
import React from "react";
import fleetSvg from "../../assets/images/illustrations/fleet.svg";
import securityGateSvg from "../../assets/images/illustrations/security-gate.svg";
import ApiCalls from "../../components/ApiCalls";
import { ButtonLink } from "../../components/button";
import ContentSpacer from "../../components/ContentSpacer";
import { bigFont } from "../../components/global-css";
import Layout from "../../components/layout";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import SignUpButton from "../../components/sign-up-button";
import { dartSecondary } from "../../theme";

export function CloudPage(): JSX.Element {
  return (
    <Layout
      title="Cloud orchestration"
      description="Manage devices from the Toit cloud: schedule when a device goes online to update the Toit firmware and software or to send data to the cloud."
    >
      <PageTitle
        title="Fleet orchestration"
        subTitle="Cloud"
        css={css`
          background: ${dartSecondary.string()};
        `}
      />

      <Section>
        <SideBySide illustration={fleetSvg}>
          <p css={bigFont}>
            Our fleet orchestration gives you both a clear overview and detailed information about the health of your
            device fleet.
          </p>

          <SignUpButton />
        </SideBySide>

        <ContentSpacer preventLine />

        <div
          css={css`
            display: grid;
            grid-gap: var(--contentPadding);
            grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
            text-align: left;
          `}
        >
          <p>
            You choose when to install or update applications and our orchestration engine intelligently schedules the
            activity, even for devices that are often offline.
          </p>

          <p>
            Dealing with lots of devices and need to treat them differently? You can group your devices and deploy code
            or configuration updates on a group by group level.
          </p>
        </div>
      </Section>

      <Section>
        <SideBySide illustration={securityGateSvg} illustrationPosition="left">
          <h1>Secure communication</h1>
          All communication between the device and the cloud is end-to-end encrypted using modern public-key encryption.
          Each device has its own cryptographically secure identity, so you know exactly where all collected data stems
          from.
        </SideBySide>
      </Section>

      <Section
        css={css`
          background-color: ${dartSecondary.string()};
          padding-top: 0;
          padding-bottom: 0;
        `}
      >
        <SideBySide
          css={css`
            padding-top: 0;
            padding-bottom: 0;
          `}
          illustration={<ApiCalls />}
          illustrationPosition="right"
          unboxedIllustration
        >
          <div
            css={css`
              padding-top: var(--sectionVerticalPadding);
              padding-bottom: var(--sectionVerticalPadding);
            `}
          >
            <h1>Fully programmable</h1>
            <p>
              Our APIs are designed to give you full programmatic control of your devices and to make it easy to ingest
              collected data into your own backend. After all, IoT is all about data - your data!
            </p>
            <p>
              Our customers have access to the same APIs that we use internally. This means that everything you can do
              with the Toit platform, you can do with our gRPC-based APIs.
            </p>
            <p>
              <ButtonLink variant="outlined" href="https://docs.toit.io/apis/api">
                Learn more
              </ButtonLink>
            </p>
          </div>
        </SideBySide>
      </Section>
    </Layout>
  );
}

export default CloudPage;
