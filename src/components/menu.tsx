import { Breadcrumbs, makeStyles, styled, Theme } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import ExternalLinkIcon from "../assets/icons/external-link.svg";
import menu, { MenuItem } from "../content/menu.yaml";

const useStyles = makeStyles((theme: Theme) => ({
  breadcrumbsNav: {
    marginLeft: "auto",
    paddingBottom: 0,
  },
  link: {
    color: theme.palette.primary.contrastText,
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

type MenuLinkProps = {
  item: MenuItem;
  isActive: boolean;
};

function MenuLink({ item, isActive }: MenuLinkProps): JSX.Element {
  const classes = useStyles();
  if (item.to != undefined) {
    return (
      <a target="_blank" rel="noreferrer" className={classes.link} href={item.to}>
        {item.title}
        <PositionedExternalLinkIcon />
      </a>
    );
  } else {
    let to = item.path;
    if (item.subpages && item.subpages.length > 0) {
      to += item.subpages[0].path;
    }
    return (
      // We're not using activeClassName here, because if we're on subpages of
      // the menu item, we still want this menu item to be highlighted.
      <Link to={to} className={clsx(classes.link, { [classes.active]: isActive })}>
        {item.title} {item.to}
      </Link>
    );
  }
}

interface MenuProps {
  currentPath?: string;
}

function Menu({ currentPath }: MenuProps): JSX.Element {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" separator=" " classes={{ root: classes.breadcrumbsNav }}>
      {menu.items
        .filter((item) => item.path != "/")
        .map((item) => (
          <MenuLink
            key={item.path}
            isActive={currentPath != undefined && currentPath.startsWith(item.path)}
            item={item}
          />
        ))}
    </Breadcrumbs>
  );
}

export default Menu;
