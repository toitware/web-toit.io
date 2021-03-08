import { Breadcrumbs, makeStyles, Theme, Typography } from "@material-ui/core";
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
  separator: {
    color: theme.palette.primary.contrastText,
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
      <Breadcrumbs aria-label="breadcrumb" separator="|" classes={{ separator: classes.separator }}>
        <Link to="/terms-of-service">
          <Typography variant="body2">Terms of service</Typography>
        </Link>
        <Link to="/privacy-policy">
          <Typography variant="body2">Privacy policy</Typography>
        </Link>
        <Link to="/cookies-policy">
          <Typography variant="body2">Cookies policy</Typography>
        </Link>
      </Breadcrumbs>
      <Logo className={classes.logo} />
    </div>
  );
}
