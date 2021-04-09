import { Button, Card, Link as LinkCore, makeStyles, Theme, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";
import { primaryGreen, secondaryGreen } from "../theme";
import { CheckIcon, UnCheckedIcon } from "./icons";

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
    margin: theme.spacing(2),
  },
  buttons: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
  cookieConsentCard: {
    position: "fixed",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 10020,
    maxWidth: "700px",
    width: "calc(100% - 32px)",
  },
}));

/**
 * A helper variable that makes sure the analytics are only loaded once.
 */
let loadedAnalytics = false;

const handleAcceptCookie = () => {
  Cookies.set("toit-cookies", "true", {
    path: "/",
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  });
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

    analytics.ready(() => {
      const userID = Cookies.get("ToitUserID");
      if (userID) {
        analytics.identify("user/" + userID, {
          entity_type: "user",
        });
      }
    });
  }
};

export default function Cookie(): JSX.Element {
  const classes = useStyles();
  const [isConsent, setConsent] = useState<boolean>(true);
  const [isUserConsent, setUserConsent] = useState<boolean | null>(null);
  const [manageCookies, setManageCookies] = useState(false);

  const handleAcceptCookieUI = () => {
    Cookies.set("toit-allow-cookies", "true", {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    setManageCookies(false);
  };

  const handleDeclineCookie = () => {
    if (Cookies.get("toit-allow-cookies")) {
      Cookies.remove("toit-allow-cookies", { path: "/" });
    }
    if (Cookies.get("toit-cookies")) {
      Cookies.remove("toit-cookies", { path: "/" });
    }
    analytics.reset();
    setConsent(false);
    setUserConsent(false);
    setManageCookies(false);
  };

  useEffect(() => {
    if (Cookies.get("toit-allow-cookies") === "true") {
      setUserConsent(true);
    }
    if (isUserConsent === false) {
      console.log("user consent = false");
      handleDeclineCookie();
    } else if (Cookies.get("toit-cookies") === undefined) {
      handleAcceptCookie();
    } else if (isUserConsent) {
      handleAcceptCookieUI();
    }
  }, [isConsent, isUserConsent]);
  return (
    <>
      {manageCookies !== true ? (
        <Card
          hidden={manageCookies || isUserConsent === true || isUserConsent === false}
          className={classes.cookieConsentCard}
        >
          <div className={classes.cookieConsentTextContent}>
            <Typography>
              We use cookies to collect data to improve your user experience. By using our website, you&apos;re agreeing
              on our <Link to="/cookies-policy">cookies policy</Link>. You can at any time{" "}
              <LinkCore onClick={() => setManageCookies(true)} className={classes.link}>
                manage your cookies
              </LinkCore>
              .
            </Typography>
          </div>
        </Card>
      ) : (
        <Card hidden={!manageCookies} className={classes.cookieConsentCard}>
          <div className={classes.cookieConsentTopContent}>
            <Logo className={classes.logo} />
          </div>
          <div className={classes.cookieConsentTextContent}>
            <Typography variant="h3">Change your cookie setting</Typography>
            <Typography>
              We use cookies to register and track the traffic on our website. The main purpose is to improve on our
              website performance and your experience of our website.{" "}
            </Typography>

            <Typography className={classes.lineSkip}>
              Currently, you are {isConsent ? "accepting" : "declining"} our use of cookies. Feel free to change it any
              time, by pressing either decline or accept below.
            </Typography>
          </div>
          <div className={classes.buttons}>
            <Button
              startIcon={isUserConsent === false ? <CheckIcon /> : <UnCheckedIcon />}
              size="medium"
              variant="contained"
              className={classes.button}
              onClick={() => setUserConsent(false)}
            >
              Decline
            </Button>
            <Button
              startIcon={isUserConsent ? <CheckIcon /> : <UnCheckedIcon />}
              size="medium"
              variant="contained"
              className={classes.button}
              onClick={() => setUserConsent(true)}
            >
              Accept
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}
