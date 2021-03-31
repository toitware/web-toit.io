import { Button, Link, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

/**
 * A helper variable that makes sure the analytics are only loaded once.
 */
let loadedAnalytics = false;

const handleAcceptCookie = () => {
  if (analytics && !loadedAnalytics) {
    // Segment

    loadedAnalytics = true;

    if (analytics.load && process.env.GATSBY_SEGMENT_WRITE_KEY) {
      analytics.load(process.env.GATSBY_SEGMENT_WRITE_KEY);
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
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={() => {
        handleAcceptCookie();
      }}
      onDecline={() => {
        handleDeclineCookie();
      }}
      cookieName="toit-allow-cookies"
      disableButtonStyles
      style={{
        background: theme.palette.background.default,
        boxShadow: "0px 0px 30px rgba(0,0,0,0.3)",
      }}
      ButtonComponent={(props: { id: string }) => (
        <Button
          {...props}
          variant="contained"
          color={props.id == "rcc-confirm-button" ? "secondary" : "primary"}
          className={classes.button}
        />
      )}
    >
      <Typography component="span">
        This site uses cookies. Read more about our cookies policy{" "}
        <Link color="textPrimary" href="/cookies-policy">
          here.
        </Link>
      </Typography>
    </CookieConsent>
  );
}
