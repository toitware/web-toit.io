import { css } from "@emotion/react";
import React from "react";
import { clampBuilder, darkSection } from "../../components/global-css";
import Layout from "../../components/layout";
import Section from "../../components/layout/Section";
import RiveAnimation from "../../components/RiveAnimation";
import SignUpButton from "../../components/sign-up-button";
import { black, white } from "../../theme";

export function ProvisionPage(): JSX.Element {
  return (
    <Layout
      css={css`
        --headerTextColor: ${white.string()};
        --headerHoverBackgroundColor: ${black.string()};
        --headerBackgroundColor: ${black.alpha(0.4).string()};
      `}
      title="Provisioning the ESP32"
      simplified
      callToAction={
        <SignUpButton
          css={css`
            --buttonColor: white;
            --buttonContrastColor: black;
          `}
          size="small"
          variant="outlined"
        />
      }
    >
      <Section
        css={css`
          ${darkSection}
          min-height: 100vh;
          border-top: none;
          padding-top: ${clampBuilder("tiny", "huge", 6, 12)};
          display: flex;
          justify-content: center;
          align-items: center;
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
      </Section>
    </Layout>
  );
}

export default ProvisionPage;
