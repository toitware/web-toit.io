import { createMuiTheme } from "@material-ui/core";

export const spacing = 8;

export const pinkWhiteTheme = createTheme(
  "rgba(255, 132, 132, 1)",
  "rgba(255, 255, 255, 1)",
  "rgba(255, 132, 132, 0.5)",
  "rgba(255, 255, 255, 0.5)",
  spacing
);
export const greyBlueTheme = createTheme(
  "rgba(215, 220, 225, 1)",
  "rgba(55, 75, 100, 1)",
  "rgba(215, 220, 225, 0.5",
  "rgba(55, 75, 100, 0.5)",
  spacing
);
export const whiteBlueTheme = createTheme(
  "rgba(255, 255, 255, 1)",
  "rgba(55, 75, 100, 1)",
  "rgba(255, 255, 255, 0.5)",
  "rgba(55, 75, 100, 0.5)",
  spacing
);

export const primaryTheme = pinkWhiteTheme;
export const secondaryTheme = greyBlueTheme;

function createTheme(
  color: string,
  contrastColor: string,
  colorLight: string,
  contrastColorLight: string,
  spacing: number
) {
  return createMuiTheme({
    spacing: spacing,
    palette: {
      type: "light",
      primary: {
        main: color,
        contrastText: contrastColor,
        light: colorLight,
      },
      secondary: {
        main: contrastColor,
        contrastText: color,
        light: contrastColorLight,
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
