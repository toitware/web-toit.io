import { Theme } from "@material-ui/core";
import { CSSProperties } from "react";

// Adds the necessary properties for a full width element that scales down
// according to window size.
export const pageWidth = (theme: Theme): CSSProperties => ({
  margin: "0 auto",
  maxWidth: "1080px",
  padding: theme.spacing(3),

  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
});
