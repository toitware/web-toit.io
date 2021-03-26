import { makeStyles, ThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { Helmet } from "react-helmet";
import { initSegment } from "../analytics/analytics";
import { components, shorthands } from "../mdx-components";
import { darkBlueWhiteTheme, menuTheme, primaryBlue, primaryTheme, secondaryTheme } from "../theme";
import Cookie from "./cookie";
import Footer from "./footer";
import Header from "./header";
import { SignUpProvider } from "./sign-up/context";

const useStyles = makeStyles(() => ({
  "@global": {
    html: {
      // Make sure the scrollbar is always visible (on the devices that don't
      // have a floating scrollbar), so the menu doesn't jump around when larger
      // sections cause the scrollbar to appear.
      overflowY: "scroll",
    },
    body: {
      background: primaryBlue.string(),
      margin: 0,
    },
    a: {
      color: "inherit",
    },
  },
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
}));

interface GraphType {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

interface LayoutProps {
  children: React.ReactNode;
  pathContext: {
    frontmatter: {
      title: string;
      path?: string;
    };
  };
}

export default function Layout(props: LayoutProps): JSX.Element {
  const classes = useStyles();
  const [useCookies, setUseCookies] = useState<boolean>(false);

  const data: GraphType = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    console.log("Hello");
    getCookieConsentValue("gatsby-gdpr-segment-analytics") === "true"
      ? initSegment("gatsby-gdpr-segment-analytics")
      : console.log("failed");
  });
  const pageTitle = props.pathContext.frontmatter.title;

  const title = `${pageTitle ? `${pageTitle} - ` : ""}${data.site.siteMetadata?.title}`;

  return (
    <MDXProvider components={{ ...shorthands, ...components }}>
      <ThemeProvider theme={primaryTheme}>
        <Helmet title={title}></Helmet>
        <div className={classes.root}>
          <SignUpProvider>
            <ThemeProvider theme={menuTheme}>
              <Header currentPath={props.pathContext.frontmatter.path} />
            </ThemeProvider>
            <div className={classes.content}>{props.children}</div>
            <ThemeProvider theme={darkBlueWhiteTheme}>
              <Footer />
            </ThemeProvider>
          </SignUpProvider>
        </div>
        <ThemeProvider theme={secondaryTheme}>
          <Cookie />
        </ThemeProvider>
      </ThemeProvider>
    </MDXProvider>
  );
}
