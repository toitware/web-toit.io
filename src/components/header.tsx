import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import ToitLogo from "../assets/images/toit-logo.inline.svg";
import menu from "../content/menu.yaml";
import { white } from "../theme";
import Button from "./button";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${white.alpha(0.4).string()};
  backdrop-filter: blur(10px);
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
  a:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

function Header(): JSX.Element {
  // let currentMenuItem: MenuItem | undefined;
  const currentMenuItem = menu.items[0];
  console.log(currentMenuItem);
  return (
    <Container>
      <Content>
        <ToitLogo
          css={css`
            height: 1.5rem;
            width: auto;
            margin-right: 8rem;
          `}
        />
        <Menu>
          <a>Product</a>
          <a>Pricing</a>
          <a>Developers</a>
          <a>Company</a>
        </Menu>
        <AccountButtons>
          <Button size="small" variant="outlined">
            Sign in
          </Button>
          <Button size="small">Start now</Button>
        </AccountButtons>
      </Content>
    </Container>
  );
}

export default Header;
