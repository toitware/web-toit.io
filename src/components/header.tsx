import { globalHistory } from "@reach/router";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import clsx from "clsx";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import CaretSvg from "../assets/images/icons/caret.inline.svg";
import ToitLogo from "../assets/images/toit-logo.inline.svg";
import menu from "../content/menu.yaml";
import { white } from "../theme";
import { ButtonLink } from "./button";
import { breakpoints } from "./global-css";
import Link from "./link";
import SubmenuContainer from "./Menu/SubmenuContainer";

import MenuToggle from "./popup-menu/menu-toggle";
import { Menu as PopupMenu } from "./popup-menu/menu";
import SignUpButton from "./sign-up-button";

const Wrapper = styled.div`
  --menuFadeSpeed: 150ms;
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  backdrop-filter: blur(10px);
  transition: background-color var(--menuFadeSpeed) linear;
  &:hover {
    background: ${white.string()};
  }
`;

const openedContainerCss = css`
  background: ${white.string()};
`;

const desktopCss = css`
  ${breakpoints.mediumDown} {
    display: none;
  }
`;
const mobileCss = css`
  ${breakpoints.medium} {
    display: none !important;
  }
`;

const scrolledDown = css`
  background: ${white.alpha(0.6).string()};
`;

const Mask = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 499;
  opacity: 0;
  transition: opacity var(--menuFadeSpeed) linear;
  pointer-events: none;
`;

const Content = styled.div`
  margin: 0 auto;
  box-sizing: content-box;
  max-width: var(--maxPageWidth);
  padding: 0 var(--contentPadding);

  display: flex;
  height: 4.5rem;
  align-items: center;
  justify-content: space-between;
`;

const AccountButtons = styled.div``;

const Menu = styled.nav`
  svg {
    position: relative;
    top: -2px;
    transition: all 100ms linear;
    &.opened {
      transform: rotate(180deg);
    }
  }
`;

const menuLinkCss = css`
  cursor: pointer;
  text-decoration: none;
  &:not(:last-of-type) {
    margin-right: 1.5rem;
  }
`;

function Header(): JSX.Element {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const [popupVisible, setPopupVisible] = useState(false);

  const [visibleSubmenu, setVisibleSubmenu] = useState<string | undefined>();

  // Whether the user scrolled down a bit. This is used to either set a
  // background to the menu or not.
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const setScrolled = () => setIsScrolledDown(window.scrollY > 40);

    window.addEventListener("scroll", setScrolled);

    return () => window.removeEventListener("scroll", setScrolled);
  }, []);

  function openSubmenu(item: string) {
    return () => {
      setSubmenuVisible(true);
      setVisibleSubmenu(item);
    };
  }
  function toggleSubmenu(item: string) {
    return () => {
      if (visibleSubmenu == item) {
        closeSubmenu();
      } else {
        openSubmenu(item)();
      }
    };
  }
  function closeSubmenu() {
    setVisibleSubmenu(undefined);
    setSubmenuVisible(false);
  }

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        closeSubmenu();
        setPopupVisible(false);
      }
    });
  }, [closeSubmenu, setPopupVisible]);

  return (
    <Wrapper onMouseLeave={closeSubmenu}>
      {popupVisible && (
        <Global
          styles={css`
            html {
              overflow: hidden;
            }
          `}
        />
      )}
      <Container ref={containerRef} css={[isScrolledDown && scrolledDown, popupVisible && openedContainerCss]}>
        <Content>
          <Link to="/">
            <ToitLogo
              css={css`
                height: 1.5rem;
                width: auto;
                margin-right: 8rem;
              `}
            />
          </Link>
          <Menu css={desktopCss}>
            {menu.items.map((menuItem) => {
              if (menuItem.subpages) {
                return (
                  <a
                    key={menuItem.title}
                    css={menuLinkCss}
                    onMouseEnter={openSubmenu(menuItem.title)}
                    onClick={toggleSubmenu(menuItem.title)}
                  >
                    {menuItem.title} <CaretSvg className={clsx(visibleSubmenu == menuItem.title && "opened")} />
                  </a>
                );
              } else {
                return (
                  <Link
                    key={menuItem.title}
                    css={menuLinkCss}
                    to={menuItem.path}
                    href={menuItem.href}
                    onMouseEnter={closeSubmenu}
                    onClick={closeSubmenu}
                  >
                    {menuItem.title}
                  </Link>
                );
              }
            })}
          </Menu>
          <AccountButtons css={desktopCss}>
            <ButtonLink
              href="http://console.toit.io/login"
              size="small"
              variant="text"
              css={css`
                margin-right: 1.5rem;
              `}
            >
              Sign in
            </ButtonLink>
            <SignUpButton size="small" />
          </AccountButtons>
          <MenuToggle css={mobileCss} toggle={() => setPopupVisible(!popupVisible)} isOpen={popupVisible} />
        </Content>
        <SubmenuContainer isVisible={submenuVisible} visibleSubmenu={visibleSubmenu} />
      </Container>
      <Mask
        css={
          submenuVisible &&
          css`
            opacity: 1;
          `
        }
      />
      <PopupMenu css={mobileCss} isOpen={popupVisible} />
    </Wrapper>
  );
}

export default Header;
