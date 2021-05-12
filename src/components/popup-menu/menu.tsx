import { css } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import { Link } from "../link";
import * as React from "react";
import * as menu from "../../content/menu.yaml";
import { ButtonLink } from "../button";
import SignUpButton from "../sign-up-button";
import MenuItem from "./menu-item";
import { useState } from "react";
import CaretSvg from "../../assets/images/icons/caret.inline.svg";

const menuCss = css`
  list-style: none;
  color: black;
  padding: 0 calc(8vw - 3rem);
  z-index: 100;
  pointer-events: auto;
  width: 100%;
  margin: 0;
`;

const linkCss = css`
  cursor: pointer;
  display: block;
  padding: 0.5rem 0;
  text-decoration: none;
`;

const subPageLinkCss = css`
  font-size: 1rem;
  padding-left: 1.5rem;
`;

const groupTitle = css`
  display: flex;
  align-items: center;
`;

const actionsCss = css`
  margin-top: 3rem;
  margin-bottom: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const actionButtonCss = css`
  margin-bottom: 1rem;
`;

const variants: Variants = {
  open: {
    pointerEvents: "auto",
    transition: { staggerChildren: 0.05, delayChildren: 0 },
  },
  closed: {
    pointerEvents: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function MenuLink({ item }: { item: menu.MenuItem }): JSX.Element {
  if (item.href != undefined) {
    return (
      <a href={item.href} css={linkCss}>
        {item.title}
      </a>
    );
  } else if (item.path != undefined) {
    const to = item.path;
    if (item.subpages && item.subpages.length > 0) {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div>
          <span css={[linkCss, groupTitle]} onClick={() => setIsOpen(!isOpen)}>
            {item.title} &nbsp;{" "}
            <CaretSvg
              css={
                isOpen &&
                css`
                  transform: rotate(180deg);
                `
              }
            />
          </span>
          <ul
            css={[
              css`
                display: none;
                margin: 0;
                padding: 0;
              `,
              isOpen &&
                css`
                  display: block;
                `,
            ]}
          >
            {item.subpages.map((subPage) => (
              <li
                key={subPage.title}
                css={css`
                  margin: 0;
                  padding: 0;
                  list-style: none;
                `}
              >
                <Link to={`${to}${subPage.path ?? ""}`} href={subPage.href} css={[linkCss, subPageLinkCss]}>
                  {subPage.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <Link to={to} css={linkCss}>
          {item.title}
        </Link>
      );
    }
  } else {
    return <span>Error: no path or to specified</span>;
  }
}

function Menu(): JSX.Element {
  // Make sure you also update the main menu when you make changes here.
  return (
    <motion.ul variants={variants} css={menuCss}>
      {menu.default.items.map((item) => (
        <MenuItem key={item.path}>
          <MenuLink item={item} />
        </MenuItem>
      ))}
      <MenuItem
        css={css`
          height: 1px;
          background: black;
          margin: 1.5rem 0;
        `}
      ></MenuItem>
      <MenuItem>
        <Link css={linkCss} to="/terms-of-service">
          Terms of service
        </Link>
        <Link css={linkCss} to="/privacy-policy">
          Privacy policy
        </Link>
        <Link css={linkCss} to="/cookies-policy">
          Cookies policy
        </Link>
      </MenuItem>
      <MenuItem css={actionsCss}>
        <ButtonLink css={actionButtonCss} href="http://console.toit.io/login" variant="outlined">
          Sign in
        </ButtonLink>
        <SignUpButton css={actionButtonCss} />
      </MenuItem>
    </motion.ul>
  );
}

export default Menu;
