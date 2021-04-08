import { Button, Dialog, Fab, makeStyles, Theme, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";
import { primaryGreen, secondaryGreen } from "../theme";
import { CheckIcon, CookieBiteIcon, UnCheckedIcon } from "./icons";

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
  fab: {
    position: "fixed",
    bottom: "16px",
    left: "16px",
    zIndex: 10000,
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
  const [isConsent, setConsent] = useState<null | boolean>(null);
  const [manageCookies, setManageCookies] = useState(false);

  const handleAcceptCookieUI = () => {
    Cookies.set("toit-allow-cookies", {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    setConsent(true);
    setManageCookies(false);
  };

  const handleDeclineCookie = () => {
    if (Cookies.get("toit-allow-cookies")) {
      Cookies.remove("toit-allow-cookies", { path: "/" });
    }
    analytics.reset();
    setConsent(false);
    setManageCookies(false);
  };

  useEffect(() => {
    const isConsent = Cookies.get("toit-allow-cookies");
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
    <>
      {manageCookies !== true ? (
        <Fab
          className={classes.fab}
          color="default"
          aria-label="Cookie settings"
          onClick={() => setManageCookies(true)}
        >
          <CookieBiteIcon />
        </Fab>
      ) : isConsent === null ? (
        <Dialog
          open={window.location.href.includes("cookies-policy") === true ? false : isConsent === null ? true : false}
        >
          <div className={classes.cookieConsentTopContent}>
            <Logo className={classes.logo} />
          </div>
          <div className={classes.cookieConsentTextContent}>
            <Typography variant="h3">Toit uses cookies</Typography>
            <Typography>
              We use cookies to register and track the traffic on our website. The main purpose is to improve on our
              website performance and your experience of our website.{" "}
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
      ) : (
        <Dialog open={manageCookies} onBackdropClick={() => setManageCookies(false)}>
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
              startIcon={!isConsent ? <CheckIcon /> : <UnCheckedIcon />}
              size="large"
              variant="contained"
              className={classes.button}
              onClick={() => handleDeclineCookie()}
            >
              Decline
            </Button>
            <Button
              startIcon={isConsent ? <CheckIcon /> : <UnCheckedIcon />}
              size="large"
              variant="contained"
              className={classes.button}
              onClick={() => handleAcceptCookieUI()}
            >
              Accept
            </Button>
          </div>
        </Dialog>
      )}
    </>
  );
}
