import { makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { pageWidth } from "./shared-styles";

export interface BlockProps {
  theme: Theme;
  children: React.ReactNode;
  centered?: boolean;
}

const useStyles = makeStyles((theme) => ({
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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }),
  centered: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      maxWidth: "42rem",
    },
  },
}));

function Block(props: BlockProps): JSX.Element {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={props.theme}>
      <div className={classes.root}>
        <div className={clsx(classes.content, { [classes.centered]: props.centered })}>{props.children}</div>
      </div>
    </ThemeProvider>
  );
}

export default Block;
