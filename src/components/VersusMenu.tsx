import styled from "@emotion/styled";
import React from "react";
import { black } from "../theme";
import { ButtonLink } from "./button";

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  padding-left: var(--calculatedContentPadding);
  padding-right: var(--calculatedContentPadding);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  top: -1.75rem;
  left: 0;
  right: 0;

  position: relative;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 480px) {
    position: absolute;
    flex-direction: row;
    gap: 1.5rem;
  }

  /* Making sure the active button doesn't looks like the inactive one when
     hovering. */
  a:hover {
    color: white;
    background: ${black.string()};
  }
`;

type VersusMenuProps = {
  active: "balena" | "particle" | "azure-sphere";
};
export function VersusMenu(props: VersusMenuProps): JSX.Element {
  return (
    <Wrapper>
      <Nav>
        <ButtonLink to="/product/vs-balena" variant={props.active == "balena" ? "contained" : "outlined"}>
          Balena
        </ButtonLink>
        <ButtonLink to="/product/vs-particle" variant={props.active == "particle" ? "contained" : "outlined"}>
          Particle
        </ButtonLink>
        <ButtonLink to="/product/vs-azure-sphere" variant={props.active == "azure-sphere" ? "contained" : "outlined"}>
          Azure Sphere
        </ButtonLink>
      </Nav>
    </Wrapper>
  );
}

export default VersusMenu;
