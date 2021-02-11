import "@fontsource/roboto";
import "@fontsource/roboto-mono";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Cookie from "./cookie";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";
import { components, shorthands } from "./mdx-components";
import { primaryTheme as theme } from "./theme";

const useStyles = makeStyles(() => ({
  content: {
    // The 14rem here are just an approximation of the header and footer height.
    minHeight: "calc(100vh - 14rem)",
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
        <Header />
        <div className={classes.content}>{props.children}</div>
        <Footer />
        <Cookie />
      </ThemeProvider>
    </MDXProvider>
  );
}
