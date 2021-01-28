import { Grid, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import Block from "./block";
import { secondaryTheme } from "./theme";

const useStyles = makeStyles(() => ({
  contactDetails: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function Footer(): JSX.Element {
  const classes = useStyles();

  return (
    <ThemeProvider theme={secondaryTheme}>
      <Block theme={secondaryTheme}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography variant="h6">Resources</Typography>
            <Link to="/terms-of-service">
              <Typography variant="body2">Terms of service</Typography>
            </Link>
            <Link to="/privacy-policy">
              <Typography variant="body2">Privacy policy</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} className={classes.contactDetails}>
            <div>
              <Typography variant="h6">Contact details</Typography>
              <Typography variant="body2">Toitware ApS</Typography>
              <Typography variant="body2">Inge Lehmanns Gade 10, 6.</Typography>
              <Typography variant="body2">8000 Aarhus C</Typography>
              <Typography variant="body2">Denmark</Typography>
              <br />
              <Typography variant="body2">Email: contact@toitware.com</Typography>
            </div>
          </Grid>
        </Grid>
      </Block>
    </ThemeProvider>
  );
}
