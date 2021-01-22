import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Block from "./block";

interface RightBlockProps {
  theme: Theme;
  children: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function RightBlock(props: RightBlockProps): JSX.Element {
  const classes = useStyles();

  return (
    <Block theme={props.theme}>
      <div className={classes.content}>
        <div>{props.children}</div>
      </div>
    </Block>
  );
}
