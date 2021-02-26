import { styled } from "@material-ui/core";
import { motion } from "framer-motion";
import * as React from "react";

const backdrop = {
  open: (height = 1000) => ({
    height: "100%",
    width: "100%",
    opacity: 1,
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

// The background that animates in / out
const MotionDiv = styled(motion.div)({
  background: "white",
  position: "absolute",
  top: 0,
  right: 0,
  borderRadius: 30,
  pointerEvents: "auto",
  boxShadow: "0 0 30px rgb(0, 0, 0, 0.1)",
});

function Backdrop(): JSX.Element {
  return <MotionDiv variants={backdrop} />;
}

export default Backdrop;
