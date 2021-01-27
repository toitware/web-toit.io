import { Button, createStyles, Dialog, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

const styles = (theme: Theme) =>
  createStyles({
    button: {
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
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

type SignupButtonProps = WithStyles<typeof styles>;

interface SignupButtonState {
  signupOpen: boolean;
}

class SignupButton extends React.Component<SignupButtonProps, SignupButtonState> {
  state = {
    signupOpen: false,
  };

  render() {
    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          className={this.props.classes.button}
          disableElevation
          onClick={() => {
            this.setState({ ...this.state, signupOpen: true });
          }}
        >
          Sign up
        </Button>
        {this.signupDialog()}
      </>
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

export default withStyles(styles)(SignupButton);
