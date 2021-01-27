import { createMuiTheme } from "@material-ui/core";

export const spacing = 8;

export const pinkWhiteTheme = createTheme("#ff8484", "#ffffff", spacing);
export const greyBlueTheme = createTheme("#d7dce1", "#374b64", spacing);
export const whiteBlueTheme = createTheme("#ffffff", "#374b64", spacing);

export const primaryTheme = pinkWhiteTheme;
export const secondaryTheme = greyBlueTheme;

function createTheme(color: string, contrastColor: string, spacing: number) {
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
        paddingBottom: "1rem",
        fontFamily: "Roboto",
      },
      body2: {
        color: contrastColor,
        fontSize: "0.80rem",
        fontFamily: "Roboto",
      },
      h1: {
        color: contrastColor,
        fontSize: "3.5rem",
        fontFamily: "Canano Light",
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h2: {
        color: contrastColor,
        fontSize: "3.0rem",
        fontFamily: "Canano Light",
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h3: {
        color: contrastColor,
        fontSize: "2.0rem",
        fontFamily: "Canano Light",
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h4: {
        color: contrastColor,
        fontSize: "1.5rem",
        fontFamily: "Canano Light",
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h5: {
        color: contrastColor,
        fontSize: "1.25rem",
        fontFamily: "Canano Light",
        paddingBottom: "1rem",
        paddingTop: "1rem",
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
