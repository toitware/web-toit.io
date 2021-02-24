import { makeStyles, ThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Cookie from "./cookie";
import Footer from "./footer";
import Header from "./header";
import { components, shorthands } from "./mdx-components";
import { primaryTheme as theme, secondaryTheme } from "./theme";

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

  return (
    <MDXProvider components={{ ...shorthands, ...components }}>
      <ThemeProvider theme={theme}>
        <Helmet title={data.site.siteMetadata?.title}></Helmet>
        <div className={classes.root}>
          <Header />
          <div className={classes.content}>{props.children}</div>
          <Footer />
        </div>
        <ThemeProvider theme={secondaryTheme}>
          <Cookie />
        </ThemeProvider>
      </ThemeProvider>
    </MDXProvider>
  );
}
