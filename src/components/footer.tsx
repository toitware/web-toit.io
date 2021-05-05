import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@material-ui/styles";
import CookieConsent from "@toitware/cookie-consent";
import { Link } from "./link";
import React, { useState } from "react";
import ToitLogo from "../assets/images/toit-logo.inline.svg";
import LinkedInIcon from "../assets/images/social/linked-in.inline.svg";
import RedditIcon from "../assets/images/social/reddit.inline.svg";
import TwitterIcon from "../assets/images/social/twitter.inline.svg";

import { black, secondaryTheme, white } from "../theme";
import { breakpoints, contentWidth } from "./global-css";

const Root = styled.footer`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${black.string()};
  color: ${white.string()};
  ${contentWidth}

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  grid-template-areas:
    "contact   contact"
    "product   developers"
    "company   legal"
    "copyright copyright"
    "design    design";

  ${breakpoints.small} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "contact   product   developers company legal"
      "contact   product   developers company legal"
      "contact   product   developers company legal"
      "copyright copyright copyright  design  design";
  }
`;

const Contact = styled.div`
  grid-area: contact;
`;

const navStyles = css`
  header {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 1.5rem 0;
  }
`;

const Product = styled.div`
  grid-area: product;
  ${navStyles}
`;
const Developers = styled.div`
  grid-area: developers;
  ${navStyles}
`;
const Company = styled.div`
  grid-area: company;
  ${navStyles}
`;
const Legal = styled.div`
  grid-area: legal;
  ${navStyles}
`;

const Copyright = styled.div`
  grid-area: copyright;
  padding-top: 6rem;
  font-size: 0.875rem;
`;
const Design = styled.div`
  grid-area: design;
  font-size: 0.875rem;
  ${breakpoints.small} {
    align-self: end;
    justify-self: end;
  }
`;

export default function Footer(): JSX.Element {
  const [changeConsent] = useState<boolean>(false);

  let segmentAPIKey = process.env.GATSBY_SEGMENT_WRITE_KEY;

  if (typeof document !== `undefined`) {
    // Check if the meta segment-key is set.
    const segmentKeyDOM = document.querySelector('meta[name="segment-key"]');
    if (segmentKeyDOM) {
      segmentAPIKey = segmentKeyDOM.getAttribute("content") || segmentAPIKey;
    }
  }

  return (
    <>
      <ThemeProvider theme={secondaryTheme}>
        <CookieConsent segmentKey={segmentAPIKey || "no-key"} show={true} changeConsent={changeConsent} />
      </ThemeProvider>
      <Root>
        <Contact>
          <ToitLogo
            css={css`
              height: 1.5rem;
              width: auto;
              margin-right: 8rem;
              margin-bottom: 1.5rem;
              path {
                fill: currentColor;
              }
            `}
          />
          <br />
          <Link href="mailto:contact@toit.io">Contact us</Link>
          <br />
          <div
            css={css`
              margin-top: 1.5rem;
              a {
                margin-right: 0.5rem;
              }
            `}
          >
            <Link href="https://twitter.com/toitware">
              <TwitterIcon />
            </Link>
            <Link href="https://www.linkedin.com/company/toitio">
              <LinkedInIcon />
            </Link>
            <Link href="https://www.reddit.com/user/toit-io">
              <RedditIcon />
            </Link>
          </div>
        </Contact>
        <Product>
          <header>Product</header>
          <ul>
            <li>Devices</li>
            <li>Cloud</li>
          </ul>
        </Product>
        <Developers>
          <header>Developers</header>
          <ul>
            <li>Documentation</li>
            <li>API</li>
          </ul>
        </Developers>
        <Company>
          <header>Company</header>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </Company>
        <Legal>
          <header>Legal</header>
          <ul>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Cookies policy</li>
            <li>Cookie consent</li>
          </ul>
        </Legal>
        <Copyright>&copy; Toitware ApS. 2021.</Copyright>
        <Design>
          Design by <Link href="https://jacktheobald.com/">Jack Theobald</Link>
        </Design>
      </Root>
    </>
  );
}
