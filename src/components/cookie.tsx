import { Button, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import Logo from "../../assets/images/toit-secondary.inline.svg";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(2),
  },
  logo: {
    height: "1.5rem",
    fill: "#000",
  },
  lineSkip: {
    paddingTop: theme.spacing(1),
  },
  blockingBlock: {
    position: "fixed",
    zIndex: 9990,
    right: 0,
    bottom: "-200px",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    textAlign: "center",
  },
  cookieConsentContainer: {
    width: "60%",
    maxWidth: "700px",
    height: "auto",
    maxHeight: "80vh",
    borderRadius: theme.spacing(1),
    display: "inline-block",
    zIndex: 10000,
    backgroundColor: "#ffffff",
    textAlign: "left",
    verticalAlign: "middle",
    position: "relative",
    opacity: "100%",
    overflow: "scroll",
    marginTop: theme.spacing(10),
  },
  cookieConsentTopContent: {
    margin: theme.spacing(4),
  },
  cookieConsentTextContent: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  buttons: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
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

const handleDeclineCookie = () => {
  // TODO: remove cookies here
  analytics.reset();
};

export default function Cookie(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    const isConsent = getCookieConsentValue("toit-allow-cookies");
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <div className={classes.blockingBlock}>
      <div className={classes.cookieConsentContainer}>
        <div className={classes.cookieConsentTopContent}>
          <Logo className={classes.logo} />
        </div>
        <div className={classes.cookieConsentTextContent}>
          <Typography variant="h3">Before you enter toit.io</Typography>
          <Typography>
            We use cookies to register and track the traffic on our website. The main purpose is to improve on our
            website performance and your experience of our website. We use Segment to gather data. Data from segment is
            shared with Amplitude and HubSpot for analytics.
          </Typography>

          <Typography className={classes.lineSkip}>
            Enabling these cookies is not strictly necessary for the website to work but it will provide you with a
            better browsing experience. You can delete or block these cookies, but if you do that some features of this
            site may not work as intended.
          </Typography>

          <Typography className={classes.lineSkip}>
            The cookie-related information is not used to identify you personally and the pattern data is fully under
            our control. These cookies are not used for any purpose other than those described here.
          </Typography>

          <Typography className={classes.lineSkip}>You can read more about our use of cookies here</Typography>
        </div>
        <div className={classes.buttons}>
          <Button size="large" variant="contained" color="secondary" className={classes.button}>
            Decline
          </Button>
          <Button size="large" variant="contained" color="primary" className={classes.button}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
