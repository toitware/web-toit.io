import { makeStyles, Typography } from "@material-ui/core";
import { motion, Variants } from "framer-motion";
import { Link } from "gatsby";
import * as React from "react";
import { FiExternalLink } from "react-icons/fi";
import * as menu from "../../content/menu.yaml";
import { ButtonLink } from "../button";
import SignUpButton from "../sign-up-button";
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
    marginTop: "4.5rem",
    marginBottom: "1.5rem",
    display: "flex",
    justifyContent: "space-around",
  },
  signInLink: {
    textDecoration: "none",
  },
  signInButton: {},
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
  if (item.href != undefined) {
    return (
      <a href={item.href} className={classes.link}>
        <Typography variant="body1" className={classes.typography} component="span">
          {item.title} <FiExternalLink />
        </Typography>
      </a>
    );
  } else if (item.path != undefined) {
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
  } else {
    return <span>Error: no path or to specified</span>;
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
        <ButtonLink href="http://console.toit.io/login" className={classes.signInButton} variant="outlined">
          Sign in
        </ButtonLink>
        <SignUpButton />
      </MenuItem>
    </motion.ul>
  );
}

export default Menu;
