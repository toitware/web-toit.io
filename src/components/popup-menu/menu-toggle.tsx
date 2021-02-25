import { makeStyles, Theme } from "@material-ui/core";
import { motion, SVGMotionProps } from "framer-motion";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    border: "none",
    outline: "none",
    userSelect: "none",
    cursor: "pointer",
    position: "relative",
    background: "transparent",
    width: "1.5rem",
    height: "1.5rem",
    padding: 0,
    display: "block",
  },
}));

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="currentColor" strokeLinecap="round" {...props} />
);

interface MenuToggleProps {
  toggle: (i?: any) => void;
}

export function MenuToggle({ toggle }: MenuToggleProps): JSX.Element {
  const classes = useStyles();
  return (
    <button onClick={toggle} className={classes.button}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        variants={{
          open: { color: "black" },
          closed: { color: "white", transition: { delay: 0.4 } },
        }}
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </motion.svg>
    </button>
  );
}

export default MenuToggle;
