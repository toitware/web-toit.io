import { css, Global } from "@emotion/react";
import React from "react";
import { black } from "../theme";

type breakpointName = "tiny" | "small" | "medium" | "large" | "huge";

export const breakpointsPixels = {
  tiny: 380,
  small: 800,
  medium: 1024,
  large: 1200,
  huge: 1600,
};

export const breakpoints = {
  tiny: `@media (min-width: ${breakpointsPixels.tiny}px)`,
  tinyDown: `@media (max-width: ${breakpointsPixels.tiny - 1}px)`,
  small: `@media (min-width: ${breakpointsPixels.small}px)`,
  smallDown: `@media (max-width: ${breakpointsPixels.small - 1}px)`,
  medium: `@media (min-width: ${breakpointsPixels.medium}px)`,
  mediumDown: `@media (max-width: ${breakpointsPixels.medium - 1}px)`,
  large: `@media (min-width: ${breakpointsPixels.large}px)`,
  largeDown: `@media (max-width: ${breakpointsPixels.large - 1}px)`,
  huge: `@media (min-width: ${breakpointsPixels.huge}px)`,
  hugeDown: `@media (max-width: ${breakpointsPixels.huge - 1}px)`,
};

export const bigFont = css`
  font-size: ${clampBuilder("tiny", "huge", 1, 1.875)};
  line-height: 1.5;
`;

/**
 * Takes the viewport widths in pixels and the font sizes in rem.
 *
 * Normally, you can simply use the vw, choose a number that looks good to
 * you, and clamp it. But sometimes the values need to coordinate properly
 * (e.g.: the padding and size of a box). In these cases it's helpful to define
 * a linear interpolation between the min and max browser width.
 */
export function clampBuilder(
  minWidthPx: number | breakpointName,
  maxWidthPx: number | breakpointName,
  minFontSize: number,
  maxFontSize: number,
  unit: "em" | "rem" = "rem"
): string {
  const pixelsPerRem = 16;

  const minWidth = (typeof minWidthPx === "string" ? breakpointsPixels[minWidthPx] : minWidthPx) / pixelsPerRem;
  const maxWidth = (typeof maxWidthPx === "string" ? breakpointsPixels[maxWidthPx] : maxWidthPx) / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp(${minFontSize}${unit}, ${yAxisIntersection}${unit} + ${slope * 100}vw, ${maxFontSize}${unit})`;
}

export function GlobalCss(): JSX.Element {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        :root {
          --maxPageWidth: 1440px;
          --maxContentWidth: 1200px;
          --sectionVerticalPadding: ${clampBuilder("tiny", "huge", 4.5, 12)};
          --borderRadius: 5px;
          --contentPadding: max(1.5rem, 6vw);
          --calculatedContentPadding: max(var(--contentPadding), calc((100vw - var(--maxContentWidth)) / 2));

          --centeredBlockWidth: ${clampBuilder("tiny", "huge", 30, 40)};
        }
        html {
          // Make sure the scrollbar is always visible (on the devices that don't
          // have a floating scrollbar), so the menu doesn't jump around when larger
          // sections cause the scrollbar to appear.
          overflow-y: scroll;

          font-family: Roboto, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.5rem;
        }
        body {
          // Makes sure that the footer and the background when overscrolling
          // is black too.
          background: ${black.string()};
          margin: 0;
        }

        h1,
        h2 {
          font-family: "ClashDisplay", Verdana, sans-serif;
          font-weight: 200;
          line-height: 1.3em;
        }
        h1 {
          font-size: ${clampBuilder("tiny", "huge", 2.5, 3.75)};
        }
        h2 {
          font-size: ${clampBuilder("tiny", "huge", 2.25, 3.125)};
        }
        h3 {
          font-size: ${clampBuilder("tiny", "huge", 2, 2.2)};
        }

        a {
          color: inherit;
        }
        p {
          margin: 1.5em 0;
        }
        hr {
          display: block;
          margin: 3rem 0;
          height: 2px;
          background: ${black.string()};
          border: none;
        }
        video {
          // Hack to fix an issue in Safari to show borders around videos
          // https://stackoverflow.com/a/53779216/170851
          mask-image: none;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
        }
      `}
    />
  );
}
export default GlobalCss;
