import { Button, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { motion, Variants } from "framer-motion";
import { Link } from "gatsby";
import * as React from "react";
import { FiExternalLink } from "react-icons/fi";
import * as menu from "../../content/menu.yaml";
import SignUpButton from "../sign-up-button";
import { primaryBlue, secondaryTheme } from "../../theme";
import MenuItem from "./menu-item";

const useStyles = makeStyles(() => ({
  menu: {
    listStyle: "none",
    color: "black",
    padding: 0,
    textAlign: "center",
    zIndex: 100,
    pointerEvents: "auto",
    width: "100%",
    margin: 0,
  },
  link: {
    "&:hover": { fontWeight: "bolder" },
    marginBottom: "1rem",
    textDecoration: "none",
    "& svg": {
      display: "inline-block",
      height: "1rem",
      top: "0.05em",
      position: "relative",
    },
  },
  activeLink: {
    textDecorationThickness: "3px",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "rgba(0,0,0,0.1)",
    textUnderlineOffset: "0.4em",
  },
  typography: {
    color: "black",
    fontWeight: "inherit",
    fontSize: "1.1rem",
  },
  actions: {
    marginTop: "3rem",
    padding: "1.5rem",
    background: primaryBlue.lighten(2.2).string(),
    borderRadius: "1rem",
    marginBottom: "0",
  },
  signInLink: {
    textDecoration: "none",
  },
  signInButton: {
    marginLeft: "1rem",
  },
}));

const variants: Variants = {
  open: {
    pointerEvents: "auto",
    transition: { staggerChildren: 0.05, delayChildren: 0 },
  },
  closed: {
    pointerEvents: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function MenuLink({ item }: { item: menu.MenuItem }): JSX.Element {
  const classes = useStyles();
  if (item.to != undefined) {
    return (
      <a href={item.to} className={classes.link}>
        <Typography variant="body1" className={classes.typography} component="span">
          {item.title} <FiExternalLink />
        </Typography>
      </a>
    );
  } else {
    let to = item.path;
    if (item.subpages && item.subpages.length > 0) {
      to += item.subpages[0].path;
    }

    return (
      <Link to={to} className={classes.link} activeClassName={classes.activeLink}>
        <Typography variant="body1" className={classes.typography} component="span">
          {item.title}
        </Typography>
      </Link>
    );
  }
}

function Menu(): JSX.Element {
  const classes = useStyles();

  // Make sure you also update the main menu when you make changes here.
  return (
    <motion.ul variants={variants} className={classes.menu}>
      {menu.default.items.map((item) => (
        <MenuItem key={item.path}>
          <MenuLink item={item} />
        </MenuItem>
      ))}
      <MenuItem className={classes.actions}>
        <ThemeProvider theme={secondaryTheme}>
          <SignUpButton />
          <a href="http://console.toit.io/login" className={classes.signInLink} target="_blank" rel="noreferrer">
            <Button className={classes.signInButton} variant="outlined" color="secondary">
              Sign in
            </Button>
          </a>
        </ThemeProvider>
      </MenuItem>
    </motion.ul>
  );
}

export default Menu;
