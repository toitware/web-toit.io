import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Block, { BlockProps } from "./block";

const useStyles = makeStyles(() => ({}));

type HorizontalBlockProps = BlockProps;

export function HorizontalBlock(props: HorizontalBlockProps): JSX.Element {
  const classes = useStyles();

  return (
    <Block theme={props.theme} last={props.last}>
      <Grid container>{props.children}</Grid>
    </Block>
  );
}

interface HorizontalBlockItemProps {
  children: React.ReactNode;
}

export function HorizontalBlockItem(props: HorizontalBlockItemProps): JSX.Element {
  return (
    <Grid item xs={12} md={6}>
      {props.children}
    </Grid>
  );
}
