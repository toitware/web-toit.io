import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import * as menu from "../../content/menu.yaml";
import { white } from "../../theme";
import { ButtonLink } from "../button";
import { Link } from "../link";
import SignUpButton from "../sign-up-button";
import MenuItem from "./menu-item";

const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 4.5rem;
  height: calc(100% - 4.5rem);
  left: 0;
  right: 0;
  background: ${white.string()};

  z-index: 1000;

  padding: var(--calculatedContentPadding);

  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  font-size: 1.25rem;
`;

const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  overflow-y: auto;
`;

const Separator = styled.hr`
  flex-shrink: 0;
  margin: 1rem 0;
  padding: 0;
  border: none;
  height: 1px;
  background: #b3b3b3;
`;

const MenuGroup = styled.div`
  color: black;
  pointer-events: auto;
`;

export const linkCss = css`
  cursor: pointer;
  display: block;
  padding: 0.5rem 0;
  text-decoration: none;
  line-height: 2rem;
`;

const actionButtonCss = css`
  flex: 1;
  margin: 0 0.5rem;
`;

const AccountButtons = styled.div`
  margin: 3rem -0.5rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

type Props = {
  isOpen: boolean;
  className?: string;
};

export const Menu: React.FC<Props> = ({ className, isOpen }) => {
  // Make sure you also update the main menu when you make changes here.
  return (
    <Wrapper className={className} style={{ display: isOpen ? "flex" : "none" }}>
      <Root>
        {menu.default.items.map((item) => (
          <>
            <MenuGroup key={`${item.title}-group`}>
              <MenuItem item={item} />
            </MenuGroup>
            <Separator key={`${item.title}-separator`} />
          </>
        ))}
        <MenuGroup>
          <Link css={linkCss} to="/terms-of-service">
            Terms of service
          </Link>
          <Link css={linkCss} to="/privacy-policy">
            Privacy policy
          </Link>
          <Link css={linkCss} to="/cookies-policy">
            Cookies policy
          </Link>
        </MenuGroup>
      </Root>
      <AccountButtons>
        <ButtonLink css={actionButtonCss} href="http://console.toit.io/login" variant="outlined">
          Sign in
        </ButtonLink>
        <SignUpButton css={actionButtonCss} />
      </AccountButtons>
    </Wrapper>
  );
};

export default Menu;
