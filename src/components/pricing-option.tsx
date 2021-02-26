import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    border: `2px solid ${theme.palette.primary.main}`,
    "& h2": {
      background: "black",
    },
  },
}));

interface PricingOptionProps {
  children: React.ReactNode;
}

export function PricingOption({ children }: PricingOptionProps): JSX.Element {
  const classes = useStyles();
  return <div className={classes.box}>{children}</div>;
}
export default PricingOption;
