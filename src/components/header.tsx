import { Button, createStyles, Dialog, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import ToitwareLogo from "../assets/images/Toitware-secondary-white.png";

const styles = (theme: Theme) =>
  createStyles({
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
      height: "100%",
    },
    buttons: {
      marginLeft: "auto",
    },
    button: {
      marginLeft: theme.spacing(1),
    },
    signupContent: {
      width: 500,
      height: 746,
      overflow: "hidden",
    },
    signupIframe: {
      width: "100%",
      height: "100%",
    },
  });

type HeaderProps = WithStyles<typeof styles>;

interface HeaderState {
  signupOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    signupOpen: false,
  };

  render() {
    return (
      <div>
        <div className={this.props.classes.toolbarContent}>
          <div className={this.props.classes.logoContainer}>
            <img src={ToitwareLogo as string} className={this.props.classes.logo} />
          </div>
          <div className={this.props.classes.buttons}>
            <a href="http://console.toit.io/login" target="_blank" rel="noreferrer">
              <Button variant="outlined" color="secondary" className={this.props.classes.button}>
                Login
              </Button>
            </a>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              className={this.props.classes.button}
              onClick={() => {
                this.setState({ ...this.state, signupOpen: true });
              }}
            >
              Sign up
            </Button>
          </div>
        </div>
        {this.signupDialog()}
      </div>
    );
  }

  signupDialog() {
    return (
      <Dialog
        open={this.state.signupOpen}
        onClose={() => {
          this.setState({ ...this.state, signupOpen: false });
        }}
      >
        <div className={this.props.classes.signupContent}>
          <iframe
            id="hubspot-signup-iframe"
            src={"https://share.hsforms.com/1D77eKqQSQhyl2Ybs4huWmQ3eaeq"}
            className={this.props.classes.signupIframe}
          />
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Header);
