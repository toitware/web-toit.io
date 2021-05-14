import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
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
  centeredBlock: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

interface HorizontalBlockItemProps {
  children: React.ReactNode;
  single?: boolean;
  centered?: boolean;
  centeredBlock?: boolean;
}

export function HorizontalBlockItem(props: HorizontalBlockItemProps): JSX.Element {
  const classes = useItemStyles(props);

  return (
    <Grid item xs={12} md={props.single ? 12 : 6} className={clsx({ [classes.centeredBlock]: props.centeredBlock })}>
      <div className={clsx({ [classes.centered]: props.centered })}>{props.children}</div>
    </Grid>
  );
}
