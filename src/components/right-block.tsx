import { makeStyles } from "@material-ui/core";
import React from "react";
import Block, { BlockProps } from "./block";

type RightBlockProps = BlockProps;

const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function RightBlock(props: RightBlockProps): JSX.Element {
  const classes = useStyles();

  return (
    <Block theme={props.theme} last={props.last}>
      <div className={classes.content}>
        <div>{props.children}</div>
      </div>
    </Block>
  );
}
