import { Button, Dialog, makeStyles, Theme, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Logo from "../assets/images/toit-secondary.inline.svg";
import { primaryGreen, secondaryGreen } from "../theme";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(2),
  },
  logo: {
    height: "1.5rem",
    fill: theme.palette.text.primary,
  },
  acceptButton: {
    margin: theme.spacing(2),
    backgroundColor: primaryGreen.toString(),
    color: "white",
    "&:hover": {
      backgroundColor: secondaryGreen.toString(),
      color: "white",
    },
  },
  lineSkip: {
    paddingTop: theme.spacing(1),
  },
  cookieConsentTopContent: {
    margin: theme.spacing(4),
  },
  cookieConsentTextContent: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  buttons: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

/**
 * A helper variable that makes sure the analytics are only loaded once.
 */
let loadedAnalytics = false;

const handleAcceptCookie = () => {
  if (analytics && !loadedAnalytics) {
    // Setup segment
    loadedAnalytics = true;
    let segmentAPIKey = process.env.GATSBY_SEGMENT_WRITE_KEY;

    // Check if the meta segment-key is set.
    const segmentKeyDOM = document.querySelector('meta[name="segment-key"]');
    if (segmentKeyDOM) {
      segmentAPIKey = segmentKeyDOM.getAttribute("content") || segmentAPIKey;
    }

    if (analytics.load && segmentAPIKey) {
      analytics.load(segmentAPIKey);
    }
    analytics.ready(() => {
      // TODO (jesper): identify user
      console.log("analytics ready");
    });
  }
};

// Given a cookie key `name`, returns the value of
// the cookie or `null`, if the key is not found.
function getCookie(name: string): string | null {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
}

export default function Cookie(): JSX.Element {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(["toit-allow-cookies"]);
  const [isConsent, setConsent] = useState<null | boolean>(null);

  const handleAcceptCookieUI = () => {
    setCookie("toit-allow-cookies", true, {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    setConsent(true);
  };

  const handleDeclineCookie = () => {
    setCookie("toit-allow-cookies", false, {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      secure: true,
      sameSite: true,
    });
    analytics.reset();
    setConsent(false);
  };

  useEffect(() => {
    const isConsent = getCookie("toit-allow-cookies");
    if (isConsent === "true") {
      setConsent(true);
      handleAcceptCookie();
    } else if (isConsent === "false") {
      setConsent(false);
    } else {
      setConsent(null);
    }
  }, [isConsent]);
  return (
    <Dialog open={window.location.href.includes("cookies-policy") === true ? false : isConsent === null ? true : false}>
      <div className={classes.cookieConsentTopContent}>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.cookieConsentTextContent}>
        <Typography variant="h3">Toit uses cookies</Typography>
        <Typography>
          We use cookies to register and track the traffic on our website. The main purpose is to improve on our website
          performance and your experience of our website. We use Segment to gather data, which is shared with Amplitude
          and HubSpot for analytics.
        </Typography>

        <Typography className={classes.lineSkip}>
          Enabling these cookies is not strictly necessary for the website to work but it will provide you with a better
          browsing experience. You can delete or block these cookies, but if you do that some features of this site may
          not work as intended.
        </Typography>

        <Typography className={classes.lineSkip}>
          The cookie-related information is not used to identify you personally and the pattern data is fully under our
          control. These cookies are not used for any purpose other than those described here.
        </Typography>

        <Typography className={classes.lineSkip}>
          You can read more about our use of cookies{" "}
          <Link to="/cookies-policy" className={classes.link}>
            here
          </Link>
        </Typography>
      </div>
      <div className={classes.buttons}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => handleDeclineCookie()}
        >
          Decline
        </Button>
        <Button
          size="large"
          variant="contained"
          className={classes.acceptButton}
          onClick={() => handleAcceptCookieUI()}
        >
          Accept
        </Button>
      </div>
    </Dialog>
  );
}
