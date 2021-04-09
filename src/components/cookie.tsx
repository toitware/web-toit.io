import { Button, Card, Link as LinkCore, makeStyles, Theme, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(2),
  },
  lineSkip: {
    paddingTop: theme.spacing(1),
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
  const [isUserConsent, setUserConsent] = useState<boolean | null>(null);
  const [manageCookies, setManageCookies] = useState(false);

  const handleAcceptCookieUI = () => {
    Cookies.set("toit-allow-cookies", "true", {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    setUserConsent(true);
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
    window.sessionStorage.setItem("cookies", "false");
    setManageCookies(false);
  };

  useEffect(() => {
    //toit-allow-cookies is used when the user explicitly accepts cookies
    //toit-cookies is used when the user has not explicitly accepted cookies yet
    if (Cookies.get("toit-allow-cookies") === "true") {
      setUserConsent(true);
    }
    if (window.sessionStorage.getItem("cookies") === "false") {
      console.log("user consent = false");
      handleDeclineCookie();
    } else if (Cookies.get("toit-cookies") === undefined) {
      handleAcceptCookie();
    } else if (isUserConsent) {
      handleAcceptCookieUI();
    }
  }, [isUserConsent]);
  return (
    <>
      {manageCookies !== true ? (
        <Card
          hidden={manageCookies || window.sessionStorage.getItem("cookies") === "false" || isUserConsent === true}
          className={classes.cookieConsentCard}
        >
          <div className={classes.cookieConsentTextContent}>
            <Typography>
              We use cookies to collect data to improve your user experience. By using our website, you&apos;re agreeing
              to our{" "}
              <Link to="/cookies-policy" className={classes.link}>
                cookies policy
              </Link>
              . You can change your{" "}
              <LinkCore onClick={() => setManageCookies(true)} className={classes.link}>
                preferences
              </LinkCore>{" "}
              at any time.
            </Typography>
          </div>
        </Card>
      ) : (
        <Card hidden={!manageCookies} className={classes.cookieConsentCard}>
          <div className={classes.cookieConsentTextContent}>
            <Typography variant="h3">Change your cookie setting</Typography>
            <Typography>
              We use cookies to register the traffic on our website. The main purpose is to improve our website
              performance and your experience of our website.{" "}
            </Typography>

            <Typography className={classes.lineSkip}>
              Feel free to change it any time, by pressing either decline or accept below.
            </Typography>
          </div>
          <div className={classes.buttons}>
            <Button size="medium" variant="contained" className={classes.button} onClick={() => handleDeclineCookie()}>
              Decline
            </Button>
            <Button size="medium" variant="contained" className={classes.button} onClick={() => handleAcceptCookieUI()}>
              Accept
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}
