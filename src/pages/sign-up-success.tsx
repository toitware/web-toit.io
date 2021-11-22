import { css } from "@emotion/react";
import React, { useEffect } from "react";
import Layout from "../components/layout";
import CenteredBlock from "../components/layout/CenteredBlock";
import Section from "../components/layout/Section";
import { pythonSecondary } from "../theme";

export function SignUpSuccessPage(): JSX.Element {
  useEffect(() => {
    const redirectUrl = new URLSearchParams(window.location.search).get("redirect");
    const redirect = () => (window.location.href = !!redirectUrl ? redirectUrl : "https://toit.io");

    if (!!redirectUrl) {
      analytics.ready(() => {
        analytics.track("OAuth2 Signup Succeeded", {});
        analytics.track("SignUp", {}, { integrations: { All: false, Reddit: true } });
        // Wait one second for the tracking events to fire off properly.
        setTimeout(redirect, 1000);
      });
      // In case analytics takes too long to be ready, we redirect anyway so
      // users don't get stuck here.
      setTimeout(redirect, 3000);
    } else {
      console.error("No redirect URL provided.");
      // There was no redirect url, so we just wait a bit for the user to see
      // the page and then redirect to the fallback.
      setTimeout(redirect, 1000);
    }
  }, []);

  return (
    <Layout title="Sign up for the Toit platform successful" simplified>
      <Section
        css={css`
          min-height: 100vh;
          border-top: none;
          background: ${pythonSecondary.string()};

          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <CenteredBlock>
          <h1>Sign up successful</h1>

          <p>You will be redirected shortly.</p>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=3155756&conversionId=4095170&fmt=gif"
          />
        </CenteredBlock>
      </Section>
    </Layout>
  );
}

export default SignUpSuccessPage;
