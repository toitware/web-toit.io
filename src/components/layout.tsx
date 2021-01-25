import "@fontsource/roboto";
import { Button, makeStyles, ThemeProvider } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { primaryTheme as theme } from "./theme";
import ToitwareLogo from "../assets/images/Toitware-secondary-white.png";
import Footer from "./footer";
import "@fontsource/roboto";
import "@fontsource/roboto-mono";
import "./layout.css";
import { components, shorthands } from "./mdx-components";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  toolbarContent: {
    display: "flex",
    margin: "0 auto",
    maxWidth: "1080px",
    padding: theme.spacing(2),
  },
  logoContainer: {
    height: "32px",
  },
  logo: {
    height: "100%",
  },
  buttons: {
    marginLeft: "auto",
  },
  button: {
    marginLeft: theme.spacing(1),
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
          <div>
            <div className={classes.toolbarContent}>
              <div className={classes.logoContainer}>
                <img src={ToitwareLogo as string} className={classes.logo} />
              </div>
              <div className={classes.buttons}>
                <Button variant="outlined" color="secondary" className={classes.button}>
                  Login
                </Button>
                <Button variant="contained" color="secondary" disableElevation className={classes.button}>
                  Sign up
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.middle}>{props.children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </MDXProvider>
  );
}
