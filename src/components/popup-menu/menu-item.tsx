import { motion, Variants } from "framer-motion";
import * as React from "react";

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  children?: React.ReactNode;
  className?: string;
}

function MenuItem({ children, className }: MenuItemProps): JSX.Element {
  return (
    <motion.li variants={itemVariants} className={className}>
      {children}
    </motion.li>
  );
}

export default MenuItem;
