import { Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import * as React from "react";
import GetStartedButton from "./getstarted-button";
import { secondaryRed } from "./theme";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "25rem",
    maxWidth: "100%",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    background: theme.palette.primary.contrastText,
    color: "white",
    fontSize: "1.625rem",
    lineHeight: "2rem",
    padding: "2rem",
    borderRadius: "0.5rem 0.5rem 0 0",
  },
  content: {
    ...theme.typography.body1,
    border: `2px solid ${theme.palette.primary.contrastText}`,
    borderTop: "none",
    borderRadius: "0 0 0.5rem 0.5rem",
    padding: "4.5rem 0",
    flexGrow: 1,

    // Now for the positioning of the children:
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentText: {},
  primaryTitle: {
    background: secondaryRed.string(),
  },
  primaryContent: {
    borderColor: secondaryRed.string(),
    color: secondaryRed.string(),
  },
  primaryButton: {
    background: secondaryRed.string(),
    "&:hover": {
      background: secondaryRed.lighten(0.15).string(),
    },
  },
  note: {
    display: "block",
    margin: "3rem 0 0 0",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: theme.palette.primary.contrastText,
  },
  value: {
    lineHeight: "3rem",
  },
  number: {
    display: "block",
    fontSize: "3.5rem",
    fontWeight: "bold",
  },
  actions: {
    marginTop: "4.5rem",
  },
}));

interface PricingOptionProps {
  primary?: boolean;
  title: string;
  children: React.ReactNode;
}

export function PricingOption({ children, title, primary }: PricingOptionProps): JSX.Element {
  const classes = useStyles();
  return (
    <section className={clsx(classes.box)}>
      <Typography variant="h1" className={clsx(classes.title, { [classes.primaryTitle]: primary })}>
        {title}
      </Typography>

      <div className={clsx(classes.content, { [classes.primaryContent]: primary })}>{children}</div>
    </section>
  );
}

interface StandardPricingOptionProps {
  title: string;
  rate: string;
  info: string;
}

export function StandardPricingOption({ title, rate, info }: StandardPricingOptionProps): JSX.Element {
  const classes = useStyles();
  return (
    <PricingOption title={title} primary>
      <div className={classes.contentText}>
        <div className={classes.value}>
          <span className={classes.number}>{rate}</span> per MB
        </div>
        <small className={classes.note}>{info}</small>
      </div>
      <div className={classes.actions}>
        <GetStartedButton className={classes.primaryButton} size={"large"} />
      </div>
    </PricingOption>
  );
}

interface ExtendedPricingOptionProps {
  title: string;
  limit: string;
}
export function ExtendedPricingOption({ title, limit }: ExtendedPricingOptionProps): JSX.Element {
  const classes = useStyles();
  return (
    <PricingOption title={title}>
      <div className={classes.contentText}>
        <div className={classes.value}>
          More than <span className={classes.number}>{limit}</span> per month?
        </div>
      </div>
      <div className={classes.actions}>
        <Button variant="contained" color="secondary" size="large" disableElevation href="mailto:sales@toit.io">
          Contact Sales
        </Button>
      </div>
    </PricingOption>
  );
}

export default PricingOption;
