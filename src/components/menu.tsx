import { Breadcrumbs, makeStyles, styled, Theme } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import ExternalLinkIcon from "../assets/icons/external-link.svg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "5%",
    "& a": {
      color: "white",
    },
  },
  breadcrumbsNav: {
    paddingBottom: 0,
  },
  active: {
    textDecorationThickness: "3px",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "white",
    textUnderlineOffset: "0.4em",
  },
}));

const PositionedExternalLinkIcon = styled(ExternalLinkIcon)({
  height: "1rem",
  position: "relative",
  top: "0.1em",
});

function Menu(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb" separator=" " classes={{ root: classes.breadcrumbsNav }}>
        {/*
        <Link to="/product" activeClassName={classes.active}>
          Product
        </Link>
        <Link to="/pricing" activeClassName={classes.active}>
          Pricing
        </Link>
         */}
        <Link to="/about" activeClassName={classes.active}>
          About
        </Link>
        <a target="_blank" rel="noreferrer" href="https://docs.toit.io">
          Docs
          <PositionedExternalLinkIcon />
        </a>
      </Breadcrumbs>
    </div>
  );
}

export default Menu;
