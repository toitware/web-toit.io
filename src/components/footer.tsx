import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@material-ui/styles";
import CookieConsent from "@toitware/cookie-consent";
import React, { useState } from "react";
import LinkedInIcon from "../assets/images/social/linked-in.inline.svg";
import RedditIcon from "../assets/images/social/reddit.inline.svg";
import TwitterIcon from "../assets/images/social/twitter.inline.svg";
import ToitLogo from "../assets/images/toit-logo.inline.svg";
import { black, primaryTheme, white } from "../theme";
import { breakpoints } from "./global-css";
import { Link } from "./link";

const baseFooterStyle = css`
  padding: 3rem var(--calculatedContentPadding);
  background: ${black.string()};
  color: ${white.string()};
`;

const Root = styled.footer`
  ${baseFooterStyle}

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  grid-template-areas:
    "contact    developers"
    "company    legal"
    "copyright  copyright"
    "design     design";

  ${breakpoints.small} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "contact   developers company legal"
      "contact   developers company legal"
      "contact   developers company legal"
      "copyright copyright  design  design";
  }
`;

const SimplifiedRoot = styled.footer`
  ${baseFooterStyle}
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

  a {
    text-decoration: none;
  }
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

const toitLogoCss = css`
  height: 1.5rem;
  width: auto;
  margin-right: 8rem;
  margin-bottom: 1.5rem;
  path {
    fill: currentColor;
  }
`;

type Props = {
  simplified?: boolean;
};

export default function Footer({ simplified = false }: Props): JSX.Element {
  const [changeConsent, setChangeConsent] = useState(false);

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
      <ThemeProvider theme={primaryTheme}>
        <CookieConsent
          show={true}
          segmentKey={segmentAPIKey || "no-key"}
          changeConsent={changeConsent}
          onAnalyticsReady={() => {
            window.redditSnippetLoader("t2_brvtmsx5");
          }}
        />
      </ThemeProvider>
      {!simplified && <FooterContent setChangeConsent={setChangeConsent} />}
      {simplified && <SimplifiedFooterContent />}
    </>
  );
}

function FooterContent({
  setChangeConsent,
}: {
  setChangeConsent: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <Root>
      <Contact>
        <Link to="/">
          <ToitLogo css={toitLogoCss} />
        </Link>

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
          <Link href="https://www.reddit.com/r/toit/">
            <RedditIcon />
          </Link>
        </div>
      </Contact>

      <Developers>
        <header>Developers</header>
        <ul>
          <li>
            <Link href="https://docs.toit.io/">Documentation</Link>
          </li>
        </ul>
      </Developers>
      <Company>
        <header>Company</header>
        <ul>
          <li>
            <Link to="/company/about">About</Link>
          </li>
          <li>
            <Link href="https://blog.toit.io/">Blog</Link>
          </li>
          <li>
            <Link href="mailto:contact@toit.io">Contact us</Link>
          </li>
        </ul>
      </Company>
      <Legal>
        <header>Legal</header>
        <ul>
          <li>
            <Link to="/terms-of-service">Terms of service</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy policy</Link>
          </li>
          <li>
            <Link to="/cookies-policy">Cookies policy</Link>
          </li>
          <li>
            <a href="#" onClick={() => setChangeConsent(true)}>
              Change cookie consent
            </a>
          </li>
        </ul>
      </Legal>
      <Copyright>&copy; Toitware ApS</Copyright>
      <Design>
        Design by <Link href="https://jacktheobald.com/">Jack Theobald</Link>
      </Design>
    </Root>
  );
}

function SimplifiedFooterContent(): JSX.Element {
  return (
    <SimplifiedRoot>
      <Contact
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link to="/">
          <ToitLogo
            css={css`
              ${toitLogoCss}

              margin-right: 0;
            `}
          />
        </Link>
        <Copyright
          css={css`
            padding-top: 0rem;
          `}
        >
          &copy; Toitware ApS
        </Copyright>
      </Contact>
    </SimplifiedRoot>
  );
}
