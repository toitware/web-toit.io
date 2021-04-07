import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import { FaCode, FaCookieBite, FaRegCheckCircle, FaRegCircle, FaWifi } from "react-icons/fa";

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      paddingBottom: theme.spacing(1),
      color: theme.palette.text.primary,
    },
    iconNoPad: {
      color: theme.palette.text.primary,
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

class CookieBiteIconComponent extends React.Component<WithStyles<typeof styles>> {
  render() {
    return <FaCookieBite size={24} className={this.props.classes.iconNoPad} />;
  }
}

class CheckIconComponent extends React.Component<WithStyles<typeof styles>> {
  render() {
    return <FaRegCheckCircle size={24} className={this.props.classes.iconNoPad} />;
  }
}

class UnCheckedIconComponent extends React.Component<WithStyles<typeof styles>> {
  render() {
    return <FaRegCircle size={24} className={this.props.classes.iconNoPad} />;
  }
}

export const CodeIcon = withStyles(styles)(CodeIconComponent);
export const ConnectionIcon = withStyles(styles)(ConnectionIconComponent);
export const CookieBiteIcon = withStyles(styles)(CookieBiteIconComponent);
export const CheckIcon = withStyles(styles)(CheckIconComponent);
export const UnCheckedIcon = withStyles(styles)(UnCheckedIconComponent);
