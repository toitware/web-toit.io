import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import PageTitle from "../components/layout/PageTitle";
import Section from "../components/layout/Section";

export function AuthPage(): JSX.Element {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState(<div></div>)

  // We don't have access to the location during server-side rendering.
  const isSSR = typeof window === "undefined";

  // Only executed on the client.
  useEffect(() => {
    const loc = isSSR ? "#" : location.hash;
    // Parse the hash.
    // Of the form #access_token=...&token_type=Bearer&expires_in=3600.
    // Or, for erros: #error=unauthorized_client&error_code=401&error_description=Email+link+is+invalid+or+has+expired
    const hash = loc.substring(1);
    const params = new URLSearchParams(hash);
    const type = params.get("type");
    const token = params.get("access_token");
    const error = params.get("error");
    const errorCode = params.get("error_code");
    const errorDescription = params.get("error_description");
    let newTitle = "";
    let newBody = <div></div>;
    if (type === "signup") {
      newTitle = "Sign up";
    } else {
      newTitle = "Authentication"
    }
    if (error) {
      newTitle += " failed"
    } else if (token) {
      newTitle += " successful"
    } else {
      newTitle += " failed"
    }
    if (!error) {
      newBody = <div>
        You may close this window.
      </div>
    } else {
      newBody = <div>
        <b>Error</b>{errorCode ? ` (${errorCode})` : ""}: {error}
        <br/>
        {errorDescription ? errorDescription + "." : ""}
      </div>
    }
    setTitle(newTitle);
    setBody(newBody);
  }, []); // Empty dependency array to ensure it runs only once on mount.
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
        {!isSSR && body}
      </Section>
    </Layout>
  );
}

export default AuthPage;
