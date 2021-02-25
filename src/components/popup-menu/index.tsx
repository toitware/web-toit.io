import { makeStyles, Theme } from "@material-ui/core";
import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
import Menu from "./menu";
import { MenuToggle } from "./menu-toggle";
// import { useDimensions } from "./use-dimensions";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
  },
  // The actual container of the whole popup menu.
  popup: {
    boxSizing: "border-box",
    position: "absolute",
    top: "-1rem",
    right: "-1rem",
    width: "26rem",
    maxWidth: "calc(100vw - 1rem)",
    paddingTop: "4.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
  },
  // The background that animates in / out
  background: {
    background: "white",
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 30,
    pointerEvents: "auto",
    boxShadow: "0 0 30px rgb(0, 0, 0, 0.1)",
  },
}));

const background = {
  open: (height = 1000) => ({
    height: "100%",
    width: "100%",
    opacity: 0.98,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 40,
    },
  }),
  closed: {
    width: "3.5rem",
    height: "3.5rem",
    opacity: 0.1,
    transition: {
      delay: 0.35,
      type: "spring",
      stiffness: 700,
      damping: 40,
    },
  },
};

export const PopupMenu = () => {
  const classes = useStyles();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"} ref={containerRef} className={classes.container}>
      <div className={classes.popup}>
        <motion.div className={classes.background} variants={background} />
        <Menu />
      </div>

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default PopupMenu;
