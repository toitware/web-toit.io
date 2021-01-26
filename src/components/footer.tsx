import { ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import RightBlock from "./right-block";
import { secondaryTheme } from "./theme";

export default function Footer(): JSX.Element {
  return (
    <ThemeProvider theme={secondaryTheme}>
      <RightBlock theme={secondaryTheme}>
        <Typography variant="h6">Contact details</Typography>
        <Typography variant="body2">Toitware ApS</Typography>
        <Typography variant="body2">Inge Lehmanns Gade 10, 6.</Typography>
        <Typography variant="body2">8000 Aarhus C</Typography>
        <Typography variant="body2">Denmark</Typography>
        <br />
        <Typography variant="body2">Email: contact@toitware.com</Typography>
      </RightBlock>
    </ThemeProvider>
  );
}
