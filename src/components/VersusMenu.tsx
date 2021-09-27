import { css } from "@emotion/react";
import React from "react";
import { ButtonLink } from "./button";

type VersusMenuProps = {
  active: "balena" | "particle" | "azure-sphere";
};
export function VersusMenu(props: VersusMenuProps): JSX.Element {
  return (
    <div
      css={css`
        position: relative;
        z-index: 100;
        padding-left: var(--calculatedContentPadding);
        padding-right: var(--calculatedContentPadding);
      `}
    >
      <div
        css={css`
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
        `}
      >
        <ButtonLink to="/product/vs-balena" variant={props.active == "balena" ? "contained" : "outlined"}>
          Balena
        </ButtonLink>
        <ButtonLink to="/product/vs-particle" variant={props.active == "particle" ? "contained" : "outlined"}>
          Particle
        </ButtonLink>
        <ButtonLink to="/product/vs-azure-sphere" variant={props.active == "azure-sphere" ? "contained" : "outlined"}>
          Azure Sphere
        </ButtonLink>
      </div>
    </div>
  );
}

export default VersusMenu;
