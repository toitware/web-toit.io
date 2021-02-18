import { makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { pageWidth } from "./shared-styles";

export interface BlockProps {
  theme: Theme;
  children: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  root: (props: BlockProps) => ({
    backgroundColor: props.theme.palette.primary.main,
    "&:last-child": {
      // Make sure that if this is the last block used, it will expand.
      flexGrow: 1,
    },
  }),
  content: (props: BlockProps) => ({
    ...pageWidth(props.theme),
  }),
}));

function Block(props: BlockProps): JSX.Element {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={props.theme}>
      <div className={classes.root}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </ThemeProvider>
  );
}

export default Block;
