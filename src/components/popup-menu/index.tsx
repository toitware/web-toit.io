import { makeStyles, styled, Theme } from "@material-ui/core";
import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
import Backdrop from "./backdrop";
import Menu from "./menu";
import { MenuToggle } from "./menu-toggle";

const useStyles = makeStyles((theme: Theme) => ({
  // The actual container of the whole popup menu.
  popup: {
    boxSizing: "border-box",
    position: "absolute",
    top: "-1rem",
    right: "-1rem",
    width: "26rem",
    maxWidth: "calc(100vw - 1.5rem)",
    padding: "4.5rem 1.5rem 1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
  },
}));

const MainNav = styled(motion.nav)({
  position: "relative",
  width: "1.5rem",
  height: "1.5rem",
});

// Creates a "hamburger button", that when clicked opens the Menu.
//
// The element itself is 1.5rem high and wide.
//
// The menu "grows out" of the button to the left side and assumes that the
// button is never closer than 0.75rem to the right edge. (That's important
// because the max-width of the menu is 100vw - 1.5rem).
//
// We might change that in the future if we want to make it more reusable, but
// in general the position of the hamburger button is quite fixed.
function PopupMenu(): JSX.Element {
  const classes = useStyles();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <MainNav initial={false} animate={isOpen ? "open" : "closed"} ref={containerRef}>
      <div className={classes.popup}>
        <Backdrop />
        <Menu />
      </div>

      <MenuToggle toggle={() => toggleOpen()} />
    </MainNav>
  );
}

export default PopupMenu;
