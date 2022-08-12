import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet";
import { ButtonLink } from "../../components/button";
import { clampBuilder, darkSection } from "../../components/global-css";
import Layout from "../../components/layout";
import Section from "../../components/layout/Section";
import RiveAnimation from "../../components/RiveAnimation";
import { black, white } from "../../theme";

export function ProvisionPage(): JSX.Element {
  return (
    <Layout
      css={css`
        --headerTextColor: ${white.string()};
        --headerHoverBackgroundColor: ${black.string()};
        --headerBackgroundColor: ${black.alpha(0.4).string()};
      `}
      title="Provisioning ESP32"
      simplified
      callToAction={
        <SignInButton
          css={css`
            --buttonColor: white;
            --buttonContrastColor: black;
          `}
        />
      }
    >
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
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

type SignUpButtonProps = {
  className?: string;
};

const jaguarLink = "https://github.com/toitlang/jaguar";

function SignInButton({ className }: SignUpButtonProps): JSX.Element {
  return (
    <ButtonLink variant="outlined" size="small" className={className} href={jaguarLink}>
      Sign in
    </ButtonLink>
  );
}

export default ProvisionPage;
