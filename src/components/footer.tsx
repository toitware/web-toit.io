import { Breadcrumbs, makeStyles, Theme } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    fontSize: "0.875rem",
  },
  logo: {
    marginTop: theme.spacing(6),
    height: "2rem",
    fill: "rgba(255, 255, 255, 0.3)",
  },
}));

export default function Footer(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Breadcrumbs aria-label="breadcrumb" separator="|" classes={{ separator: classes.link }}>
        <Link to="/terms-of-service" className={classes.link}>
          Terms of service
        </Link>
        <Link to="/privacy-policy" className={classes.link}>
          Privacy policy
        </Link>
        <Link to="/cookies-policy" className={classes.link}>
          Cookies policy
        </Link>
      </Breadcrumbs>
      <Logo className={classes.logo} />
    </div>
  );
}
