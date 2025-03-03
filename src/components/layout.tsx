import { css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import EspressifSvg from "../assets/images/logos/espressif.svg";
import OnomondoSvg from "../assets/images/logos/onomondo.svg";
import SoracomSvg from "../assets/images/logos/soracom.svg";
import UbloxSvg from "../assets/images/logos/ublox.svg";
import opengraphPng from "../assets/images/opengraph.png";
import { components, shorthands } from "../mdx-components";
import { golden, primaryTheme, white } from "../theme";
import Footer from "./footer";
import GlobalCss, { clampBuilder } from "./global-css";
import Header, { SimplifiedHeader } from "./header";
import Section from "./layout/Section";
import SignUpButton from "./sign-up-button";

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: ${white.string()};

  img {
    max-width: 100%;
  }

  font-size: ${clampBuilder("small", "large", 1, 1.25)};
  line-height: 1.5em;
`;

const ThirdPartyLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    margin: 1.5rem;
  }
`;

interface GraphType {
  site: {
    siteMetadata: {
      title: string;
      tagline: string;
    };
  };
}

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  rawTitle?: boolean;
  description?: string;
  simplified?: boolean;
  noDefaultSignup?: boolean;
  hideHeader?: boolean;
  // If you want to replace the default call to action button in the header,
  // you can provide an alternative here.
  callToAction?: JSX.Element;

  signUpText?: string;
}

export default function Layout({
  className,
  title,
  rawTitle = false,
  description,
  children,
  simplified = false,
  noDefaultSignup = false,
  hideHeader = false,
  callToAction,
  signUpText = "Find our open-source technology on GitHub and start your journey to invent the future.",
}: LayoutProps): JSX.Element {
  const data: GraphType = useStaticQuery(graphql`
    query LayoutTitleQuery {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata?.title;

  let computedTitle = title;

  if (!computedTitle) {
    computedTitle = siteTitle;
  } else if (!rawTitle) {
    computedTitle = `${computedTitle} - ${siteTitle}`;
  }

  return (
    <>
      <GlobalCss />
      <Helmet
        title={computedTitle}
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta property="og:title" content={computedTitle} />
        <meta property="og:image" content={opengraphPng} />
        {description && <meta name="description" property="og:description" content={description} />}
      </Helmet>
      <MDXProvider components={{ ...shorthands, ...components }}>
        <MuiThemeProvider theme={primaryTheme}>
          <ThemeProvider theme={primaryTheme}>
            <Root className={className}>
              {simplified && (
                <>
                  {!hideHeader && <SimplifiedHeader callToAction={callToAction} />}
                  <Content>{children}</Content>
                </>
              )}
              {!simplified && (
                <>
                  {!hideHeader && <Header callToAction={callToAction} />}
                  <Content>
                    {children}

                    {!noDefaultSignup && (
                      <Section
                        centered
                        css={css`
                          background: ${golden.string()};
                        `}
                      >
                        <h2>Get started with Toit</h2>
                        <p
                          css={css`
                            max-width: 18em;
                            margin: 3rem auto;
                          `}
                        >
                          {signUpText}
                        </p>
                        <SignUpButton />
                      </Section>
                    )}
                    <Section centered>
                      <p
                        css={css`
                          margin: 0 0 3rem;
                        `}
                      >
                        Official platform partners
                      </p>

                      <ThirdPartyLogos>
                        <img src={EspressifSvg} alt="Espressif" />
                        <img src={OnomondoSvg} alt="Onomondo" />
                        <img src={SoracomSvg} alt="Soracom" />
                        <img src={UbloxSvg} alt="u-blox" />
                      </ThirdPartyLogos>
                    </Section>
                  </Content>
                </>
              )}
              <Footer simplified={simplified} />
            </Root>
          </ThemeProvider>
        </MuiThemeProvider>
      </MDXProvider>
    </>
  );
}
