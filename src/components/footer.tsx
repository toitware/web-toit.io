import { Breadcrumbs, makeStyles, Theme, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import Logo from "../assets/images/toit-secondary.inline.svg";
import Block from "./block";
import { secondaryTheme } from "./theme";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(6),
  },
  logo: {
    marginTop: theme.spacing(6),
    height: "2rem",
    fill: "rgba(0, 0, 0, 0.1)",
  },
}));

export default function Footer(): JSX.Element {
  const classes = useStyles();

  return (
    <Block theme={secondaryTheme}>
      <div className={classes.container}>
        <Breadcrumbs aria-label="breadcrumb" separator="|">
          <Link to="/terms-of-service">
            <Typography variant="body2" component="span">
              Terms of Service
            </Typography>
          </Link>
          <Link to="/privacy-policy">
            <Typography variant="body2" component="span">
              Privacy policy
            </Typography>
          </Link>
          <Link to="/cookies-policy">
            <Typography variant="body2" component="span">
              Cookies policy
            </Typography>
          </Link>
        </Breadcrumbs>
        <Logo className={classes.logo} />
      </div>
    </Block>
  );
}
