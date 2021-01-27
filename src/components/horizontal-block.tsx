import { Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Block, { BlockProps } from "./block";

const useStyles = makeStyles(() => ({
  content: (props: HorizontalBlockProps) => ({
    paddingTop: props.theme.spacing(8),
    paddingBottom: props.theme.spacing(8),
  }),
}));

type HorizontalBlockProps = BlockProps;

export function HorizontalBlock(props: HorizontalBlockProps): JSX.Element {
  const classes = useStyles(props);

  return (
    <Block theme={props.theme} last={props.last}>
      <div className={classes.content}>
        <Grid container spacing={5} alignItems="center">
          {props.children}
        </Grid>
      </div>
    </Block>
  );
}

interface HorizontalBlockItemProps {
  children: React.ReactNode;
  theme: Theme;
  single: boolean;
}

export function HorizontalBlockItem(props: HorizontalBlockItemProps): JSX.Element {
  return (
    <Grid item xs={12} md={props.single ? 12 : 6}>
      {props.children}
    </Grid>
  );
}
