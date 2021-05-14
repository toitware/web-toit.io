import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
import Backdrop from "./backdrop";
import Menu from "./menu";
import { MenuToggle } from "./menu-toggle";

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 26rem;
  max-width: calc(100vw - 1rem);
  /* max-height: calc(100vh - 1rem);
  overflow-y: auto; */
  padding: 4.5rem 1.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  font-size: 1.25rem;
`;

const openedCss = css`
  pointer-events: default;
`;

const MainNav = styled(motion.nav)`
  position: relative;
  z-index: 100;
  width: 1.5rem;
  height: 1.5rem;
`;

type PopupMenuProps = {
  className?: string;
};

// Creates a "hamburger button", that when clicked opens the Menu.
//
// The element itself is 1.5rem tall and wide.
//
// The menu "grows out" of the button to the left side and assumes that the
// button is never closer than 0.75rem to the right edge. (That's important
// because the max-width of the menu is 100vw - 1.5rem).
//
// We might change that in the future if we want to make it more reusable, but
// in general the position of the hamburger button is quite fixed.
function PopupMenu({ className }: PopupMenuProps): JSX.Element {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <MainNav
      className={className}
      css={isOpen && openedCss}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <Wrapper>
        <Backdrop />
        <Menu />
      </Wrapper>

      <MenuToggle toggle={() => toggleOpen()} />
    </MainNav>
  );
}

export default PopupMenu;
