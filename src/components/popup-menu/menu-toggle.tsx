import styled from "@emotion/styled";
import { makeStyles, useTheme } from "@material-ui/core";
import { motion, SVGMotionProps } from "framer-motion";
import * as React from "react";

const Wrapper = styled(motion.nav)`
  position: relative;
  z-index: 100;
  width: 1.5rem;
  height: 1.5rem;
`;

const useStyles = makeStyles(() => ({
  button: {
    display: "block",
    position: "relative",

    // Make the button twice the size of its container, so it's easier to click
    // (or tap) the button.
    width: "200%",
    height: "200%",
    padding: "50%",
    marginLeft: "-50%",
    marginTop: "-50%",

    // Remove default styling of button
    border: "none",
    outline: "none",
    userSelect: "none",
    cursor: "pointer",
    background: "transparent",

    zIndex: 1000,
  },
}));

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" {...props} />
);

interface MenuToggleProps {
  className?: string;
  isOpen: boolean;
  toggle: () => void;
}

/// The toggle assumes to be in a container that is 1.5rem high and wide.
export function MenuToggle({ isOpen, toggle, className }: MenuToggleProps): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Wrapper className={className} initial={false} animate={isOpen ? "open" : "closed"}>
      <button onClick={toggle} className={classes.button}>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 22 20"
          variants={{
            open: { color: "black" },
            closed: { color: theme.palette.text.primary, transition: { delay: 0.4 } },
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
    </Wrapper>
  );
}

export default MenuToggle;
