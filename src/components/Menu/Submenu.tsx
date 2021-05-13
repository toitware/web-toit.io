import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2.5rem;

  padding-left: max(var(--contentPadding), calc((100vw - var(--maxContentWidth)) / 2));
  padding-right: max(var(--contentPadding), calc((100vw - var(--maxContentWidth)) / 2));

  pointer-events: none;
  opacity: 0;
  transition: all var(--menuFadeSpeed) linear;

  display: flex;
  align-items: flex-start;
`;

const visibleCss = css`
  opacity: 1;
  pointer-events: all;
`;

const InfoBox = styled.aside`
  width: 16rem;
  margin-right: 6rem;

  h1 {
    font-family: inherit;
    font-size: 1.25rem;
    font-weight: normal;
    margin: 0 0 1.5rem;
  }
`;
const MenuItems = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`;

type SubmenuProps = {
  isVisible?: boolean;
  children: React.ReactNode;
  title: string;
  description: string;
};

export const Submenu: React.FC<SubmenuProps & React.RefAttributes<HTMLDivElement>> = React.forwardRef<
  HTMLDivElement,
  SubmenuProps
>(({ title, description, isVisible = false, children }, ref) => {
  return (
    <Wrapper ref={ref} css={[isVisible && visibleCss]}>
      <InfoBox>
        <h1>{title}</h1>
        <p>{description}</p>
      </InfoBox>
      <MenuItems>{children}</MenuItems>
    </Wrapper>
  );
});
Submenu.displayName = "Submenu";

export default Submenu;
