import { createMuiTheme } from "@material-ui/core";

export const primaryTheme = createTheme("#ff8484", "#ffffff");
export const secondaryTheme = createTheme("#d7dce1", "#374b64");

function createTheme(color: string, contrastColor: string) {
  return createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: color,
        contrastText: contrastColor,
      },
      secondary: {
        main: contrastColor,
        contrastText: color,
      },
    },
    typography: {
      body1: {
        color: contrastColor,
      },
      body2: {
        color: contrastColor,
        fontSize: "0.80rem",
      },
      h1: {
        color: contrastColor,
        fontSize: "4.0rem",
      },
      h2: {
        color: contrastColor,
        fontSize: "3.0rem",
      },
      h3: {
        color: contrastColor,
        fontSize: "2.0rem",
      },
      h4: {
        color: contrastColor,
        fontSize: "1.5rem",
      },
      h5: {
        color: contrastColor,
        fontSize: "1.25rem",
      },
      h6: {
        color: contrastColor,
        fontSize: "1rem",
        fontWeight: "bold",
      },
    },
  });
}
