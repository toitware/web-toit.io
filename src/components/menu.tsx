import { Breadcrumbs, makeStyles, Theme } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  breadcrumbs: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "3rem",
    "& a": {
      color: "white",
    },
  },
  breadcrumbsNav: {
    paddingBottom: 0,
  },
  active: {
    fontWeight: "bold",
    textDecorationThickness: "3px",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "white",
    textUnderlineOffset: "0.4em",
  },
}));

const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.breadcrumbs}>
      <Breadcrumbs aria-label="breadcrumb" separator=" " classes={{ root: classes.breadcrumbsNav }}>
        <Link to="/product" activeClassName={classes.active}>
          Product
        </Link>
        <Link to="/pricing" activeClassName={classes.active}>
          Pricing
        </Link>
        <Link to="/about" activeClassName={classes.active}>
          About
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default Menu;
