import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import { FaCode, FaWifi } from "react-icons/fa";

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      paddingBottom: theme.spacing(1),
      color: theme.palette.primary.contrastText,
    },
  });

class CodeIconComponent extends React.Component<WithStyles<typeof styles>> {
  render() {
    return <FaCode size={24} className={this.props.classes.icon} />;
  }
}

class ConnectionIconComponent extends React.Component<WithStyles<typeof styles>> {
  render() {
    return <FaWifi size={24} className={this.props.classes.icon} />;
  }
}

export const CodeIcon = withStyles(styles)(CodeIconComponent);
export const ConnectionIcon = withStyles(styles)(ConnectionIconComponent);
