import { Button, makeStyles, Theme, ThemeProvider, Typography } from "@material-ui/core";
import { motion, Variants } from "framer-motion";
import { Link } from "gatsby";
import * as React from "react";
import ExternalLinkIcon from "../../assets/icons/external-link.svg";
import GetStartedButton from "../getstarted-button";
import { primaryBlue, secondaryTheme } from "../theme";
import MenuItem from "./menu-item";

const useStyles = makeStyles((theme: Theme) => ({
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
  loginLink: {
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

function Menu(): JSX.Element {
  const classes = useStyles();

  // Make sure you also update the main menu when you make changes here.
  return (
    <motion.ul variants={variants} className={classes.menu}>
      <MenuItem>
        <Link to="/" className={classes.link} activeClassName={classes.activeLink}>
          <Typography variant="body1" className={classes.typography} component="span">
            Home
          </Typography>
        </Link>
      </MenuItem>
      {/*
      <MenuItem>
        <Link to="/product" className={classes.link} activeClassName={classes.activeLink}>
          <Typography variant="body1" className={classes.typography} component="span">
            Product
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/pricing" className={classes.link} activeClassName={classes.activeLink}>
          <Typography variant="body1" className={classes.typography} component="span">
            Pricing
          </Typography>
        </Link>
      </MenuItem>
       */}
      <MenuItem>
        <Link to="/about" className={classes.link} activeClassName={classes.activeLink}>
          <Typography variant="body1" className={classes.typography} component="span">
            About
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <a target="_blank" rel="noreferrer" href="https://docs.toit.io" className={classes.link}>
          <Typography variant="body1" className={classes.typography} component="span">
            Docs <ExternalLinkIcon />
          </Typography>
        </a>
      </MenuItem>
      <MenuItem className={classes.actions}>
        <ThemeProvider theme={secondaryTheme}>
          <GetStartedButton />
          <a href="http://console.toit.io/login" target="_blank" rel="noreferrer">
            <Button className={classes.loginLink} variant="outlined" color="secondary">
              Login
            </Button>
          </a>
        </ThemeProvider>
      </MenuItem>
    </motion.ul>
  );
}

export default Menu;
