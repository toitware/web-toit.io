import { Button, Link, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { initSegment } from "../analytics/analytics";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const handleAcceptCookie = () => {
  if (process.env.SEGMENT_ANALYTICS_ID) {
    initSegment(process.env.SEGMENT_ANALYTICS_ID);
  }
};

const handleDeclineCookie = () => {
  //remove cookies here
};

export default function Cookie(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    console.log(isConsent);
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
