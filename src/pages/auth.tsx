import { css } from "@emotion/react";
import React from "react";
import Layout from "../components/layout";
import PageTitle from "../components/layout/PageTitle";
import Section from "../components/layout/Section";

export function AuthPage(): JSX.Element {
  const loc = location.hash;
  // Parse the hash.
  // Of the form #access_token=...&token_type=Bearer&expires_in=3600.
  // #error=unauthorized_client&error_code=401&error_description=Email+link+is+invalid+or+has+expired
  const hash = loc.substring(1);
  const params = new URLSearchParams(hash);
  const type = params.get("type");
  const token = params.get("access_token");
  const error = params.get("error");
  const errorCode = params.get("error_code");
  const errorDescription = params.get("error_description");
  let title = ""
  if (type === "signup") {
    title = "Sign up";
  } else {
    title = "Authentication"
  }
  if (error) {
    title += " failed"
  } else if (token) {
    title += " successful"
  } else {
    title += " failed"
  }
  let bodyLine1 = "You may close this window"
  let bodyLine2 = ""
  if (error) {
    bodyLine1 = "Error";
    if (errorCode) {
      bodyLine1 += ` (${errorCode})`;
    }
    bodyLine1 += `: ${error}\n`;
    if (errorDescription) {
      bodyLine2 = errorDescription;
    }
  }
  return (
    <Layout
      title="Auth"
      description="Auth status page"
      simplified={true}
      hideHeader={true}
    >
      <PageTitle
        css={css`
          h1 {
            max-width: 15em;
          }
        `}
        title={title}
      />

      <Section
        css={css`
          text-align: center;
          padding-top: 4.5rem;
        `}
      >
        {bodyLine1}
        <br/>
        {bodyLine2}
      </Section>
    </Layout>
  );
}

export default AuthPage;
