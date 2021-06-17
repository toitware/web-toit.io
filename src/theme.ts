import { createMuiTheme, PaletteType, Theme } from "@material-ui/core";
import Color from "color";

const defaultSpacing = 8;

export const white = Color("#fff");

export const black = Color("#000");
export const passion = Color("#FF8484");
export const golden = Color("#FAC864");
export const dart = Color("#5E6FDB");
export const python = Color("#53978E");
export const tiger = Color("#53978E");

export const blackSecondary = black.alpha(0.3);
export const passionSecondary = Color("#FFB5B5");
export const goldenSecondary = Color("#FFE598");
export const dartSecondary = Color("#C1C9FF");
export const pythonSecondary = Color("#BDDCD8");
export const tigerSecondary = Color("#FFDBC0");

export const errorColor = Color("#f00");
export const successColor = Color("#0f0");

export const secondaryGold = Color.hsl(40, 94, 69);
export const secondaryBlack = Color.hsl(0, 0, 16);
export const secondaryRed = Color.hsl(0, 100, 70);
export const primaryGreen = Color.hsl(109, 100, 32);
export const secondaryGreen = Color.hsl(135, 65, 33);

// This is only really used in external libraries.
// Internally we use css vars.
export const primaryTheme = createTheme({
  type: "light",
  background: white,
  text: black,
  primary: dart,
  primaryContrast: black,
});

type CreateThemeParameters = {
  type?: PaletteType;
  background: Color;
  text: Color;
  primary?: Color;
  primaryContrast?: Color;
  secondary?: Color;
  secondaryContrast?: Color;
  error?: Color;
  spacing?: number;
};

export function createTheme({
  type = "light",
  background,
  text,
  primary = dart,
  primaryContrast = Color("white"),
  secondary = secondaryRed,
  secondaryContrast = Color("white"),
  spacing = defaultSpacing,
}: CreateThemeParameters): Theme {
  const textColor = text.string();
  const bodyFontFamily = "Roboto, Helvetica, Arial, sans-serif";
  const titleFontFamily = "Canano Light, Helvetica, Arial, sans-serif";

  // Small helper function that blends the color with the background if we're in
  // a "light" theme (since then the background is light), and simply lightens
  // it otherwise (= makes it more white).
  //
  // This is preferable to simply using lighten/darken because it preserves
  // color information: if you have white text and darken it, it will become
  // grey, which doesn't look too great on a colored background. But if you
  // blend it with the background, it will simply get closer to that color which
  // normally is what you want.
  function lighten(color: Color): Color {
    if (type == "dark") {
      return color.lighten(0.2);
    } else {
      return color.mix(background, 0.2);
    }
  }
  // The exact opposite of lighten().
  function darken(color: Color) {
    if (type == "light") {
      return color.darken(0.2);
    } else {
      return color.mix(background, 0.2);
    }
  }

  return createMuiTheme({
    spacing: spacing,
    palette: {
      type: type,
      primary: {
        main: primary.string(),
        light: lighten(primary).string(),
        dark: darken(primary).string(),
        contrastText: primaryContrast.string(),
      },
      secondary: {
        main: secondary.string(),
        light: lighten(secondary).string(),
        dark: darken(secondary).string(),
        contrastText: secondaryContrast.string(),
      },
      error: {
        main: errorColor.string(),
      },
      background: {
        default: background.string(),
      },
      text: {
        primary: text.string(),
        secondary: text.alpha(0.7).string(),
        disabled: text.alpha(0.5).string(),
        hint: text.alpha(0.5).string(),
      },
    },
    typography: {
      body1: {
        color: textColor,
        fontFamily: bodyFontFamily,
      },
      body2: {
        color: textColor,
        fontSize: "0.80rem",
        fontFamily: bodyFontFamily,
      },
      h1: {
        color: textColor,
        fontSize: "3.5rem",
        fontFamily: titleFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h2: {
        color: textColor,
        fontSize: "3.0rem",
        fontFamily: titleFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h3: {
        color: textColor,
        fontSize: "2.0rem",
        fontFamily: titleFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h4: {
        color: textColor,
        fontSize: "1.5rem",
        fontFamily: titleFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h5: {
        color: textColor,
        fontSize: "1.25rem",
        fontFamily: titleFontFamily,
        paddingBottom: "1rem",
        paddingTop: "1rem",
      },
      h6: {
        color: textColor,
        fontSize: "1rem",
        fontFamily: titleFontFamily,
        fontWeight: "bold",
        opacity: 0.5,
      },
    },
  });
}
