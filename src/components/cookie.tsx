import { Button, Link, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const handleAcceptCookie = () => {
  if (analytics) {
    if (analytics.load && process.env.GATSBY_SEGMENT_WRITE_KEY) {
      analytics.load(process.env.GATSBY_SEGMENT_WRITE_KEY);
    }
    analytics.ready(() => {
      // TODO (jesper): identity user
      console.log("analytics ready", analytics);
    });
  }
};

const handleDeclineCookie = () => {
  //TODO: remove cookies here
};

export default function Cookie(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    const isConsent = getCookieConsentValue("gatsby-gdpr-segment-analytics");
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
      cookieName="gatsby-gdpr-segment-analytics"
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
