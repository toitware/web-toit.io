import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CheckCircleIcon from "../assets/icons/check-circle.svg";

const useStyles = makeStyles(() => ({
  list: {
    padding: 0,
    display: "flex",
    listStyle: "none",
    margin: "3rem 0",
  },
  item: {
    fontSize: "1.125rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    "&:not(:first-of-type)": {
      marginLeft: "1.5rem",
    },
  },
  itemIcon: {
    marginRight: "0.5rem",
  },
}));

interface FeatureProps {
  children: React.ReactNode;
}

export function Feature({ children }: FeatureProps): JSX.Element {
  const classes = useStyles();
  return (
    <Typography component="li" className={classes.item}>
      <CheckCircleIcon className={classes.itemIcon} /> {children}
    </Typography>
  );
}

interface FeaturesProps {
  children: React.ReactNode;
}

export function Features({ children }: FeaturesProps): JSX.Element {
  const classes = useStyles();

  return <ul className={classes.list}>{children}</ul>;
}

export default Features;
