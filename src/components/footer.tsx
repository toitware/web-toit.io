import { Breadcrumbs, Link as LinkCore, makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import CookieConsent from "@toitware/cookie-consent";
import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";
import { secondaryTheme } from "../theme";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    fontSize: "0.875rem",
  },
  logo: {
    marginTop: theme.spacing(6),
    height: "2rem",
    fill: "rgba(255, 255, 255, 0.3)",
  },
}));

export default function Footer(): JSX.Element {
  const classes = useStyles();
  const [changeConsent, setChangeConsent] = useState<boolean>(false);

  let segmentAPIKey = process.env.GATSBY_SEGMENT_WRITE_KEY;

  if (typeof document !== `undefined`) {
    // Check if the meta segment-key is set.
    const segmentKeyDOM = document.querySelector('meta[name="segment-key"]');
    if (segmentKeyDOM) {
      segmentAPIKey = segmentKeyDOM.getAttribute("content") || segmentAPIKey;
    }
  }

  return (
    <div className={classes.container}>
      <ThemeProvider theme={secondaryTheme}>
        <CookieConsent segmentKey={segmentAPIKey || "no-key"} show={true} changeConsent={changeConsent} />
      </ThemeProvider>
      <Breadcrumbs aria-label="breadcrumb" separator="|" classes={{ separator: classes.link }}>
        <Link to="/terms-of-service" className={classes.link}>
          Terms of service
        </Link>
        <Link to="/privacy-policy" className={classes.link}>
          Privacy policy
        </Link>
        <Link to="/cookies-policy" className={classes.link}>
          Cookies policy
        </Link>
        <LinkCore component="button" onClick={() => setChangeConsent(true)} className={classes.link}>
          Change cookie consent
        </LinkCore>
      </Breadcrumbs>
      <Logo className={classes.logo} />
    </div>
  );
}
