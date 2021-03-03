import { Button, createStyles, Hidden, makeStyles, Theme } from "@material-ui/core";
import Color from "color";
import { Link } from "gatsby";
import React from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";
import menu from "../content/menu.yaml";
import GetStartedButton from "./getstarted-button";
import Menu from "./menu";
import PopupMenu from "./popup-menu";
import { pageWidth } from "./shared-styles";
import Submenu from "./submenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.main,
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
    },
    submenuContent: {
      paddingTop: theme.spacing(3),
      borderTop: `1px solid ${Color(theme.palette.primary.contrastText).alpha(0.3).string()}`,
      display: "flex",
      justifyContent: "flex-end",
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
  })
);

type HeaderProps = {
  currentPath: string;
};

function Header({ currentPath }: HeaderProps): JSX.Element {
  const classes = useStyles();

  const currentItemPath = `/${currentPath.split("/")[1]}`;

  const currentMenuItem = menu.items.find((item) => currentItemPath == item.path);

  return (
    <div className={classes.container}>
      <div className={classes.toolbarContent}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <Logo className={classes.logo} />
          </Link>
        </div>
        <Hidden mdUp>
          <div className={classes.popup}>
            <PopupMenu />
          </div>
        </Hidden>

        <Hidden smDown>
          <div className={classes.menu}>
            <Menu currentPath={currentPath} />
          </div>
          <div className={classes.buttons}>
            <Hidden xsDown>
              <span className={classes.button}>
                <GetStartedButton />
              </span>
            </Hidden>
            <a href="http://console.toit.io/login" target="_blank" rel="noreferrer">
              <Button variant="outlined" color="secondary" className={classes.button}>
                Login
              </Button>
            </a>
          </div>
        </Hidden>
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
