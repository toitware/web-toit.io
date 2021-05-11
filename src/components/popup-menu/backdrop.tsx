import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import * as React from "react";
import { white } from "../../theme";

const useStyles = makeStyles(() => ({
  root: {
    background: white.string(),
    opacity: 0,
    position: "absolute",
    top: 0,
    right: 0,
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: 5,
    pointerEvents: "auto",
    boxShadow: "0 0 30px rgb(0, 0, 0, 0.1)",
  },
}));

function Backdrop(): JSX.Element {
  const backdrop = {
    open: {
      height: "100%",
      width: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 40,
      },
    },
    closed: {
      width: "3.5rem",
      height: "3.5rem",
      opacity: 0,
      transition: {
        delay: 0.35,
        type: "spring",
        stiffness: 700,
        damping: 40,
      },
    },
  };

  const classes = useStyles();

  return <motion.div className={classes.root} variants={backdrop} />;
}

export default Backdrop;
