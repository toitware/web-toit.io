import { Button, createStyles, Hidden, Theme, withStyles, WithStyles } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";
import GetStartedButton from "./getstarted-button";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.main,
    },
    toolbarContent: {
      display: "flex",
      margin: "0 auto",
      maxWidth: "1080px",
      padding: theme.spacing(2),
    },
    logoContainer: {
      height: "32px",
    },
    logo: {
      height: "32px",
      fill: "white",
    },
    buttons: {
      marginLeft: "auto",
    },
    button: {
      marginLeft: theme.spacing(2),
    },
  });

type HeaderProps = WithStyles<typeof styles>;

interface HeaderState {
  getstartedOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    getstartedOpen: false,
  };

  render() {
    return (
      <div className={this.props.classes.container}>
        <div className={this.props.classes.toolbarContent}>
          <div className={this.props.classes.logoContainer}>
            <Link to="/">
              <Logo className={this.props.classes.logo} />
            </Link>
          </div>
          <div className={this.props.classes.buttons}>
            <Hidden xsDown>
              <span className={this.props.classes.button}>
                <GetStartedButton />
              </span>
            </Hidden>
            <a href="http://console.toit.io/login" target="_blank" rel="noreferrer">
              <Button variant="outlined" color="secondary" className={this.props.classes.button}>
                Login
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
