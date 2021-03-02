import { Button, createStyles, Hidden, Theme, withStyles, WithStyles } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";
import GetStartedButton from "./getstarted-button";
import Menu from "./menu";
import PopupMenu from "./popup-menu";
import { pageWidth } from "./shared-styles";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.main,
    },
    toolbarContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ...pageWidth(theme),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    menu: {
      marginLeft: "auto",
    },
    logoContainer: {
      height: "2rem",
    },
    logo: {
      height: "2rem",
      fill: theme.palette.primary.contrastText,
    },
    buttons: {},
    button: {
      marginLeft: theme.spacing(2),
    },
    popup: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingRight: "0.25rem",
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
          <Hidden mdUp>
            <div className={this.props.classes.popup}>
              <PopupMenu />
            </div>
          </Hidden>

          <Hidden smDown>
            <div className={this.props.classes.menu}>
              <Menu />
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
          </Hidden>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
