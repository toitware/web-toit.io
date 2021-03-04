import { Breadcrumbs, makeStyles, Theme } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import { SubmenuItem } from "../content/menu.yaml";

const useStyles = makeStyles((theme: Theme) => ({
  breadcrumbsNav: {
    marginLeft: "auto",
    paddingBottom: 0,
  },
  link: {
    color: theme.palette.primary.contrastText,
    fontSize: "0.9375rem",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  active: {
    textDecorationThickness: "2px",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "white",
    textUnderlineOffset: "0.4em",
  },
}));

interface SubmenuProps {
  pathPrefix: string;
  items: SubmenuItem[];
}

function Submenu({ pathPrefix, items }: SubmenuProps): JSX.Element {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" separator=" " classes={{ root: classes.breadcrumbsNav }}>
      {items.map((item) => (
        <Link
          key={item.path}
          to={`${pathPrefix}${item.path}`}
          className={classes.link}
          activeClassName={classes.active}
        >
          {item.title}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

export default Submenu;
