import { css, Global } from "@emotion/react";
import React from "react";
import { black, dart, golden, white } from "../theme";

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
  minSize: number,
  maxSize: number,
  options?: {
    unit?: "em" | "rem";
    basis?: "vw" | "vh";
  }
): string {
  const { unit = "rem", basis = "vw" } = options ?? {};
  const pixelsPerRem = 16;

  const minWidth = (typeof minWidthPx === "string" ? breakpointsPixels[minWidthPx] : minWidthPx) / pixelsPerRem;
  const maxWidth = (typeof maxWidthPx === "string" ? breakpointsPixels[maxWidthPx] : maxWidthPx) / pixelsPerRem;

  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minSize;

  const lowerBound = maxSize > minSize ? minSize : maxSize;
  const upperBound = maxSize > minSize ? maxSize : minSize;

  return `clamp(${lowerBound}${unit}, ${yAxisIntersection}${unit} + ${slope * 100}${basis}, ${upperBound}${unit})`;
}

export const darkSection = css`
  background: ${black.string()};
  color: ${white.string()};
  strong {
    font-weight: normal;
    background-color: var(--highlightColor);
  }
`;

export const greySection = css`
  background: #f9f9f9;
`;

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
          --fontFamilyContent: Roboto, Helvetica, sans-serif;
          --fontFamilyTitle: "ClashDisplay", Verdana, sans-serif;
          --maxPageWidth: 1440px;
          --maxContentWidth: 1200px;
          --sectionVerticalPadding: ${clampBuilder("tiny", "huge", 4.5, 12)};
          --borderRadius: 5px;
          --contentPadding: max(1.5rem, 6vw);
          --calculatedContentPadding: max(var(--contentPadding), calc((100vw - var(--maxContentWidth)) / 2));

          --headerTextColor: ${black.string()};
          --headerHoverBackgroundColor: ${white.string()};
          --headerBackgroundColor: ${white.alpha(0.6).string()};

          --centeredBlockWidth: ${clampBuilder("tiny", "huge", 30, 40)};

          --highlightColor: ${dart.string()};

          --buttonColor: ${black.string()};
          --buttonContrastColor: ${white.string()};

          --columnSeparatorWidth: clamp(3rem, 6vw, 4.5rem);
        }
        html {
          // Make sure the scrollbar is always visible (on the devices that don't
          // have a floating scrollbar), so the menu doesn't jump around when larger
          // sections cause the scrollbar to appear.
          overflow-y: scroll;

          font-family: var(--fontFamilyContent);
          font-size: 16px;
          line-height: 1.5rem;
        }
        body {
          // Makes sure that the footer and the background when overscrolling
          // is black too.
          background: ${golden.string()};
          margin: 0;
        }

        // The .h1 and .h2 classes are used to disguise a different h-tag for
        // SEO purposes.
        h1,
        h2,
        .h1,
        .h2 {
          font-family: var(--fontFamilyTitle);
          font-weight: 200;
          line-height: 1.3em;
        }
        h1,
        .h1 {
          font-size: ${clampBuilder("tiny", "huge", 2.5, 3.75)};
        }
        h2,
        .h2 {
          font-size: ${clampBuilder("tiny", "huge", 2.25, 3.125)};
        }
        h3 {
          font-size: ${clampBuilder("tiny", "huge", 2, 2.2)};
          line-height: 1.3em;
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
        small {
          font-size: ${clampBuilder("tiny", "huge", 0.65, 1)};
          line-height: 1.5;
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
