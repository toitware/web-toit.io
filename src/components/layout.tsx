import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeProvider as MuiThemeProvider, ThemeProvider } from "@material-ui/core";
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
import Header from "./header";
import Section from "./layout/Section";
import SignUpButton from "./sign-up-button";
import { SignUpProvider } from "./sign-up/context";

let RedditTrackingSetup = false;
const setupRedditTracking = () => {
  if (RedditTrackingSetup) {
    return;
  }
  RedditTrackingSetup = true;
  // Redirect to analytics requests to reddit.
  const forReddit = (options?: SegmentAnalytics.SegmentOpts): boolean => {
    const integrations = options && (options.integrations as { Reddit?: boolean } | undefined);
    return !!(integrations && integrations.Reddit);
  };

  if (typeof window !== "undefined") {
    analytics.on("track", (event, properties, options) => {
      if (forReddit(options)) {
        window.rdt("track", event);
      }
    });
    analytics.on("page", () => {
      window.rdt("track", "PageVisit");
    });
  }
};
setupRedditTracking();

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
    };
  };
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ title, children }: LayoutProps): JSX.Element {
  const data: GraphType = useStaticQuery(graphql`
    query LayoutTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const titleWithSuffix = `${title ? `${title} - ` : ""}${data.site.siteMetadata?.title}`;

  return (
    <>
      <GlobalCss />
      <Helmet title={titleWithSuffix}>
        <meta property="og:image" content={opengraphPng} />
      </Helmet>
      <MDXProvider components={{ ...shorthands, ...components }}>
        <MuiThemeProvider theme={primaryTheme}>
          <ThemeProvider theme={primaryTheme}>
            <SignUpProvider>
              <Root>
                <Header />
                <Content>
                  {children}

                  <Section
                    centered
                    css={css`
                      background: ${golden.string()};
                    `}
                  >
                    <h2>Ready to get started?</h2>
                    <p
                      css={css`
                        max-width: 18em;
                        margin: 3rem auto;
                      `}
                    >
                      Get access to our platform and start your journey to invent the future.
                    </p>
                    <SignUpButton />
                  </Section>
                  <Section centered>
                    <p
                      css={css`
                        margin: 0 0 3rem;
                      `}
                    >
                      Official platform partners:
                    </p>

                    <ThirdPartyLogos>
                      <img src={EspressifSvg} />
                      <img src={OnomondoSvg} />
                      <img src={SoracomSvg} />
                      <img src={UbloxSvg} />
                    </ThirdPartyLogos>
                  </Section>
                </Content>
                <Footer />
              </Root>
            </SignUpProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </MDXProvider>
    </>
  );
}
