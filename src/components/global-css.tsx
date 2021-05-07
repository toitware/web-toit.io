import { css, Global } from "@emotion/react";
import React from "react";
import { black } from "../theme";

export const breakpoints = {
  small: `@media (min-width: 800px)`,
  medium: `@media (min-width: 1024px)`,
  large: `@media (min-width: 1200px)`,
};

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
          --contentPadding: max(1.5rem, 6vw);
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
