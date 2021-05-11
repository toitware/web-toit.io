import { css, Global } from "@emotion/react";
import React from "react";
import { black } from "../theme";

export const breakpoints = {
  small: `@media (min-width: 800px)`,
  smallDown: `@media (max-width: 799px)`,
  medium: `@media (min-width: 1024px)`,
  mediumDown: `@media (max-width: 1023px)`,
  large: `@media (min-width: 1200px)`,
  largeDown: `@media (max-width: 1199px)`,
};

/**
 * Takes the viewport widths in pixels and the font sizes in rem.
 *
 * Normally, you can simply use the vw, choose a number that looks good to
 * you, and clamp it. But sometimes the values need to coordinate properly
 * (e.g.: the padding and size of a box). In these cases it's helpful to define
 * a linear interpolation between the min and max browser width.
 */
export function clampBuilder(minWidthPx: number, maxWidthPx: number, minFontSize: number, maxFontSize: number): string {
  const pixelsPerRem = 16;

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem)`;
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
          --maxContentWidth: 1080px;
          --sectionVerticalPadding: 4.5rem;
          --borderRadius: 5px;
          --contentPadding: max(1.5rem, 6vw);
          --calculatedContentPadding: max(var(--contentPadding), calc((100vw - var(--maxContentWidth)) / 2));
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
          font-size: clamp(2.5rem, 4vw, 3.125rem);
        }
        h2 {
          font-size: clamp(2.25rem, 3vw, 2.5rem);
        }
        h3 {
          font-size: clamp(2rem, 2.5vw, 2.2rem);
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
