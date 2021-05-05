import styled from "@emotion/styled";
import { ThemeProvider as MuiThemeProvider, ThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { components, shorthands } from "../mdx-components";
import { primaryTheme, white } from "../theme";
import Footer from "./footer";
import GlobalCss, { breakpoints } from "./global-css";
import Header from "./header";
import { SignUpProvider } from "./sign-up/context";

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

  ${breakpoints.medium} {
    font-size: 1.125rem;
    line-height: 1.5em;
  }
  ${breakpoints.large} {
    font-size: 1.25rem;
    line-height: 1.5em;
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
      <Helmet title={titleWithSuffix}></Helmet>
      <MDXProvider components={{ ...shorthands, ...components }}>
        <MuiThemeProvider theme={primaryTheme}>
          <ThemeProvider theme={primaryTheme}>
            <SignUpProvider>
              <Root>
                <Header />
                <Content>{children}</Content>
                <Footer />
              </Root>
            </SignUpProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </MDXProvider>
    </>
  );
}
