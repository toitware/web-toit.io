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
      // The default size of the dialog.
      width: "30rem",
      height: "45rem",
      // The maximum size in case the browser size is smaller.
      maxWidth: "calc(100vw - 4rem)",
      maxHeight: "calc(100vh - 4rem)",

      display: "flex",
      flexDirection: "column",

      // A bit of a dirty hack to avoid the iframe to grow past it's provided
      // container. Can be removed as soon as we build our own form.
      overflow: "hidden",
      "& > iframe": {
        flex: 1,
        overflow: "scroll",
      },
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

type GetStartedButtonProps = WithStyles<typeof styles>;

interface GetStartedButtonState {
  getstartedOpen: boolean;
}

class GetStartedButton extends React.Component<GetStartedButtonProps, GetStartedButtonState> {
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

export default withStyles(styles)(GetStartedButton);
