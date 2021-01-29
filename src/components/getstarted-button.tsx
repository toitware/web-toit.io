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
    getstartedContent: {
      backgroundColor: "#f4f8fa",
      width: 500,
      height: 712,
      overflow: "hidden",
    },
    getstartedHeader: {
      paddingLeft: 40,
      paddingRight: 40,
      marginBottom: -18,
    },
    getstartedHeaderText: {
      textColor: theme.palette.secondary.main,
    },
    getstartedIframe: {
      width: "100%",
      height: "100%",
      border: 0,
    },
  });

type GetstartedButtonProps = WithStyles<typeof styles>;

interface GetstartedButtonState {
  getstartedOpen: boolean;
}

class GetstartedButton extends React.Component<GetstartedButtonProps, GetstartedButtonState> {
  state = {
    getstartedOpen: false,
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
            this.setState({ ...this.state, getstartedOpen: true });
          }}
        >
          Get started
        </Button>
        {this.getstartedDialog()}
      </>
    );
  }

  getstartedDialog() {
    return (
      <Dialog
        open={this.state.getstartedOpen}
        onClose={() => {
          this.setState({ ...this.state, getstartedOpen: false });
        }}
      >
        <ThemeProvider theme={greyBlueTheme}>
          <div className={this.props.classes.getstartedContent}>
            <div className={this.props.classes.getstartedHeader}>
              <Typography variant="h3">Get started</Typography>
            </div>
            <iframe
              id="hubspot-getstarted-iframe"
              src={"https://share.hsforms.com/1D77eKqQSQhyl2Ybs4huWmQ3eaeq"}
              className={this.props.classes.getstartedIframe}
            />
          </div>
        </ThemeProvider>
      </Dialog>
    );
  }
}

export default withStyles(styles)(GetstartedButton);
