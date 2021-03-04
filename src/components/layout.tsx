import { makeStyles, ThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Cookie from "./cookie";
import Footer from "./footer";
import Header from "./header";
import { components, shorthands } from "./mdx-components";
import { darkBlueWhiteTheme, primaryBlue, primaryTheme, secondaryTheme } from "./theme";

const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      background: primaryBlue.string(),
      margin: 0,
    },
    a: {
      textDecoration: `none`,
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

  const data: GraphType = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const pageTitle = props.pathContext.frontmatter.title;

  const title = `${pageTitle ? `${pageTitle} - ` : ""}${data.site.siteMetadata?.title}`;

  return (
    <MDXProvider components={{ ...shorthands, ...components }}>
      <ThemeProvider theme={primaryTheme}>
        <Helmet title={title}></Helmet>
        <div className={classes.root}>
          <Header currentPath={props.pathContext.frontmatter.path} />
          <div className={classes.content}>{props.children}</div>
          <ThemeProvider theme={darkBlueWhiteTheme}>
            <Footer />
          </ThemeProvider>
        </div>
        <ThemeProvider theme={secondaryTheme}>
          <Cookie />
        </ThemeProvider>
      </ThemeProvider>
    </MDXProvider>
  );
}
