import "@fontsource/roboto";
import "@fontsource/roboto-mono";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";
import { components, shorthands } from "./mdx-components";
import { primaryTheme as theme } from "./theme";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  middle: {
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
          <div className={classes.middle}>{props.children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </MDXProvider>
  );
}
