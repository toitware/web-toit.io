import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { spacing } from "./theme";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: spacing * 4,
  },
}));

interface HighLightsProps {
  children: React.ReactNode;
}

export function HighLights(props: HighLightsProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {props.children}
      </Grid>
    </div>
  );
}

interface HighLightProps {
  children: React.ReactNode;
}

export function HighLight(props: HighLightProps): JSX.Element {
  return (
    <Grid item xs={6}>
      {props.children}
    </Grid>
  );
}
