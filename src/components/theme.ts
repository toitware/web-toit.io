import { createMuiTheme } from "@material-ui/core";
import Color from "color";

const defaultSpacing = 8;

// The color definitions provided by our corporate identity.
export const primaryRed = Color.hsl(0, 100, 76);
export const primaryBlue = Color.hsl(213, 29, 30);

// A very light shade of the primary blue. The naming is based on color systems
// like tailwindcss
// (https://tailwindcss.com/docs/customizing-colors#color-palette-reference) or
// material ui
const primaryBlue100 = primaryBlue.lightness(86);

export const secondaryGold = Color.hsl(40, 94, 69);
export const secondaryBlack = Color.hsl(0, 0, 16);
export const secondaryRed = Color.hsl(0, 100, 70);

// The different themes used throughout the website.
export const pinkWhiteTheme = createTheme({
  color: primaryRed,
  contrastColor: Color("white"),
  errorColor: primaryBlue,
});
export const greyBlueTheme = createTheme({
  color: primaryBlue100,
  contrastColor: primaryBlue,
  errorColor: primaryRed,
});
export const whiteBlueTheme = createTheme({
  color: Color("white"),
  contrastColor: primaryBlue,
  errorColor: primaryRed,
});
export const darkBlueWhiteTheme = createTheme({
  color: primaryBlue,
  contrastColor: primaryBlue100,
  errorColor: primaryRed,
});

export const primaryTheme = pinkWhiteTheme;
export const secondaryTheme = greyBlueTheme;

type CreateThemeParameters = {
  color: Color;
  contrastColor: Color;
  errorColor: Color;
  colorLight?: Color;
  contrastColorLight?: Color;
  spacing?: number;
};

function createTheme({
  color,
  contrastColor,
  errorColor,
  colorLight,
  contrastColorLight,
  spacing = defaultSpacing,
}: CreateThemeParameters) {
  const textColor = contrastColor.string();
  const titleFontFamily = "Roboto, Helvetica, Arial, sans-serif";
  const bodyFontFamily = "Canano Light, Helvetica, Arial, sans-serif";
  return createMuiTheme({
    spacing: spacing,
    palette: {
      type: "light",
      primary: {
        main: color.string(),
        contrastText: contrastColor.string(),
        light: (colorLight ?? color.alpha(0.5)).string(),
      },
      secondary: {
        main: contrastColor.string(),
        contrastText: color.string(),
        light: (contrastColorLight ?? contrastColor.alpha(0.5)).string(),
      },
      error: {
        main: errorColor.string(),
      },
    },
    typography: {
      body1: {
        color: textColor,
        fontFamily: titleFontFamily,
      },
      body2: {
        color: textColor,
        fontSize: "0.80rem",
        fontFamily: titleFontFamily,
      },
      h1: {
        color: textColor,
        fontSize: "3.5rem",
        fontFamily: bodyFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h2: {
        color: textColor,
        fontSize: "3.0rem",
        fontFamily: bodyFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h3: {
        color: textColor,
        fontSize: "2.0rem",
        fontFamily: bodyFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h4: {
        color: textColor,
        fontSize: "1.5rem",
        fontFamily: bodyFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h5: {
        color: textColor,
        fontSize: "1.25rem",
        fontFamily: bodyFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h6: {
        color: textColor,
        fontSize: "1rem",
        fontFamily: bodyFontFamily,
        fontWeight: "bold",
        opacity: 0.5,
      },
    },
  });
}
