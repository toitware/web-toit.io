import { makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";

interface BlockProps {
  theme: Theme;
  children: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  root: (props: BlockProps) => ({
    backgroundColor: props.theme.palette.primary.main,
  }),
  content: (props: BlockProps) => ({
    margin: "0 auto",
    maxWidth: "1080px",
    padding: props.theme.spacing(2),
  }),
}));

export default function Block(props: BlockProps): JSX.Element {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={props.theme}>
      <div className={classes.root}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </ThemeProvider>
  );
}
