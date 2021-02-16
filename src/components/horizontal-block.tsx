import { Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Block, { BlockProps } from "./block";

const useStyles = makeStyles(() => ({
  content: (props: HorizontalBlockProps) => ({
    paddingTop: props.theme.spacing(8),
    paddingBottom: props.theme.spacing(8),
    // This is not ideal, but the Grid is creating a strange overflow and the
    // easiest fix is to prevent a horizontal overflow.
    overflowX: "hidden",
  }),
}));

type HorizontalBlockProps = BlockProps;

export function HorizontalBlock(props: HorizontalBlockProps): JSX.Element {
  const classes = useStyles(props);

  return (
    <Block theme={props.theme}>
      <div className={classes.content}>
        <Grid container spacing={5} alignItems="center">
          {props.children}
        </Grid>
      </div>
    </Block>
  );
}

const useItemStyles = makeStyles(() => ({
  centered: { display: "flex", justifyContent: "center", alignItems: "center" },
}));

interface HorizontalBlockItemProps {
  children: React.ReactNode;
  theme: Theme;
  single: boolean;
  centered?: boolean;
}

export function HorizontalBlockItem(props: HorizontalBlockItemProps): JSX.Element {
  const classes = useItemStyles(props);

  return (
    <Grid item xs={12} md={props.single ? 12 : 6}>
      <div className={props.centered ? classes.centered : ""}>{props.children}</div>
    </Grid>
  );
}
