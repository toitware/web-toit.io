import {
  Button,
  createStyles,
  Dialog,
  Theme,
  ThemeProvider,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import React from "react";
import { greyBlueTheme } from "./theme";

const styles = (theme: Theme) =>
  createStyles({
    button: {
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    signupContent: {
      backgroundColor: "#f4f8fa",
      width: 500,
      height: 712,
      overflow: "hidden",
    },
    signupHeader: {
      paddingLeft: 40,
      paddingRight: 40,
      marginBottom: -18,
    },
    signupHeaderText: {
      textColor: theme.palette.secondary.main,
    },
    signupIframe: {
      width: "100%",
      height: "100%",
      border: 0,
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
        <ThemeProvider theme={greyBlueTheme}>
          <div className={this.props.classes.signupContent}>
            <div className={this.props.classes.signupHeader}>
              <Typography variant="h3">Sign up</Typography>
            </div>
            <iframe
              id="hubspot-signup-iframe"
              src={"https://share.hsforms.com/1D77eKqQSQhyl2Ybs4huWmQ3eaeq"}
              className={this.props.classes.signupIframe}
            />
          </div>
        </ThemeProvider>
      </Dialog>
    );
  }
}

export default withStyles(styles)(SignupButton);
