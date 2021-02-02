import { Button, Link, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import React from "react";
import CookieConsent from "react-cookie-consent";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    margin: theme.spacing(2),
  },
}));

export default function Cookie(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="gatsby-gdpr-google-analytics"
      disableButtonStyles
      style={{
        background: theme.palette.primary.main,
      }}
      ButtonComponent={(props) => (
        <Button {...props} variant="contained" color="secondary" className={classes.button} />
      )}
    >
      <Typography>
        This site uses cookies. Read more about our cookies policy{" "}
        <Link color="error" href="/cookies-policy">
          here.
        </Link>
      </Typography>
    </CookieConsent>
  );
}
