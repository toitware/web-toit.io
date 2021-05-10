import { css } from "@emotion/react";
import styled from "@emotion/styled";
import clsx from "clsx";
import * as React from "react";
import { useRef, useState } from "react";
import CaretSvg from "../assets/images/icons/caret.inline.svg";
import ToitLogo from "../assets/images/toit-logo.inline.svg";
import menu from "../content/menu.yaml";
import { white } from "../theme";
import Button from "./button";
import Link from "./link";
import SubmenuContainer from "./Menu/SubmenuContainer";

const Container = styled.header`
  --menuFadeSpeed: 100ms;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${white.alpha(0.4).string()};
  backdrop-filter: blur(10px);
  transition: background-color var(--menuFadeSpeed) linear;
  &:hover {
    background: ${white.string()};
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: var(--maxPageWidth);
  padding: 0 var(--contentPadding);

  display: flex;
  height: 4.5rem;
  align-items: center;
  justify-content: space-between;
`;

const AccountButtons = styled.div`
  button:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

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

  const [visibleSubmenu, setVisibleSubmenu] = useState<string | undefined>();

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

  return (
    <Container ref={containerRef} onMouseLeave={closeSubmenu}>
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
        <Menu>
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
        <AccountButtons>
          <Button size="small" variant="outlined">
            Sign in
          </Button>
          <Button size="small">Start now</Button>
        </AccountButtons>
      </Content>
      <SubmenuContainer isVisible={submenuVisible} visibleSubmenu={visibleSubmenu} />
    </Container>
  );
}

export default Header;
