import { createMuiTheme } from "@material-ui/core";

export const pinkWhiteTheme = createTheme("#ff8484", "#ffffff");
export const greyBlueTheme = createTheme("#d7dce1", "#374b64");
export const whiteBlueTheme = createTheme("#ffffff", "#374b64");

export const primaryTheme = pinkWhiteTheme;
export const secondaryTheme = greyBlueTheme;

export const spacing = 8;

function createTheme(color: string, contrastColor: string) {
  return createMuiTheme({
    spacing: spacing,
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
        fontSize: "3.5rem",
        fontFamily: "Canano Light",
      },
      h2: {
        color: contrastColor,
        fontSize: "3.0rem",
        fontFamily: "Canano Light",
      },
      h3: {
        color: contrastColor,
        fontSize: "2.0rem",
        fontFamily: "Canano Light",
      },
      h4: {
        color: contrastColor,
        fontSize: "1.5rem",
        fontFamily: "Canano Light",
      },
      h5: {
        color: contrastColor,
        fontSize: "1.25rem",
        fontFamily: "Canano Light",
      },
      h6: {
        color: contrastColor,
        fontSize: "1rem",
        fontFamily: "Canano Light",
        fontWeight: "bold",
        opacity: 0.5,
      },
    },
  });
}
