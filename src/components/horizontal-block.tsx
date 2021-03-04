import { Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Block, { BlockProps } from "./block";

type HorizontalBlockProps = BlockProps;

export function HorizontalBlock(props: HorizontalBlockProps): JSX.Element {
  return (
    <Block theme={props.theme}>
      <Grid container spacing={5}>
        {props.children}
      </Grid>
    </Block>
  );
}

const useItemStyles = makeStyles(() => ({
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
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
