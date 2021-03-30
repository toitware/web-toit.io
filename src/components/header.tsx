import { Button, createStyles, Hidden, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import Color from "color";
import { Link } from "gatsby";
import React from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";
import menu, { MenuItem } from "../content/menu.yaml";
import Menu from "./menu";
import PopupMenu from "./popup-menu";
import { pageWidth } from "./shared-styles";
import SignUpButton from "./sign-up-button";
import Submenu from "./submenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.background.default,
    },
    toolbarContent: {
      ...pageWidth(theme),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    submenuContainer: {
      ...pageWidth(theme),
      paddingTop: 0,
      paddingBottom: theme.spacing(2),
    },
    submenuContent: {
      paddingTop: theme.spacing(2),
      borderTop: `1px solid ${Color(theme.palette.text.primary).alpha(0.3).string()}`,
      display: "flex",
      justifyContent: "flex-end",
    },
    menu: {
      marginLeft: "auto",
    },
    link: {
      textDecoration: "none",
    },
    logoContainer: {
      height: "2rem",
    },
    logo: {
      height: "2rem",
      fill: theme.palette.text.primary,
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
    popupMenuMediaQuery: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    defaultMenuMediaQuery: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
  })
);

type HeaderProps = {
  currentPath?: string;
};

function Header({ currentPath }: HeaderProps): JSX.Element {
  const classes = useStyles();

  let currentMenuItem: MenuItem | undefined;

  if (currentPath != undefined) {
    const currentItemPath = `/${currentPath.split("/")[1]}`;
    currentMenuItem = menu.items.find((item) => currentItemPath == item.path);
  }

  return (
    <div className={classes.container}>
      <div className={classes.toolbarContent}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <Logo className={classes.logo} />
          </Link>
        </div>
        {/* Using a css implementation instead of <Hidden> for better server side rendering */}
        <div className={clsx(classes.popup, classes.popupMenuMediaQuery)}>
          <PopupMenu />
        </div>

        {/* Using the css implementation for better server side rendering */}
        <div className={clsx(classes.menu, classes.defaultMenuMediaQuery)}>
          <Menu currentPath={currentPath} />
        </div>
        <div className={clsx(classes.buttons, classes.defaultMenuMediaQuery)}>
          <Hidden xsDown>
            <span className={classes.button}>
              <SignUpButton />
            </span>
          </Hidden>
          <a href="http://console.toit.io/login" target="_blank" rel="noreferrer" className={classes.link}>
            <Button variant="outlined" color="primary" className={classes.button}>
              Sign in
            </Button>
          </a>
        </div>
      </div>
      {currentMenuItem?.subpages != undefined && (
        <div className={classes.submenuContainer}>
          <div className={classes.submenuContent}>
            <Submenu pathPrefix={currentMenuItem.path} items={currentMenuItem.subpages} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
