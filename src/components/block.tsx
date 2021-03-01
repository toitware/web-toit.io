import { makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { pageWidth } from "./shared-styles";

export interface BlockProps {
  theme: Theme;
  children: React.ReactNode;
  centered?: boolean;
}

const useStyles = makeStyles(() => ({
  // Accessing the theme through props because we're overriding the theme
  // in the component via ThemeProvider, so the makeStyles function doesn't
  // have the correct one yet.
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
  centered: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Block(props: BlockProps): JSX.Element {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={props.theme}>
      <div className={classes.root}>
        <div className={`${classes.content} ${props.centered ? classes.centered : ""}`}>{props.children}</div>
      </div>
    </ThemeProvider>
  );
}

export default Block;
