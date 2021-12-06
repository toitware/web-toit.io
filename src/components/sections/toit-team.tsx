import { css } from "@emotion/react";
import React from "react";
import { breakpoints } from "../global-css";

export type Person = {
  name: string;
  image: JSX.Element;
  description: JSX.Element;
};

export function ToitTeam({ people, className }: { people: Person[]; className?: string }): JSX.Element {
  return (
    <div
      className={className}
      css={css`
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 6rem;
        justify-items: center;
        ${breakpoints.small} {
          grid-template-columns: 1fr 1fr;
        }
      `}
    >
      {people.map((person) => {
        return (
          <div
            key={person.name}
            css={css`
              flex: 1;
              max-width: 24rem;
            `}
          >
            <div
              css={css`
                margin-bottom: 1.5rem;
              `}
            >
              {person.image}
            </div>
            <span
              css={css`
                font-weight: bold;
                font-size: 1.4em;
                margin-bottom: 3rem;
                display: block;
              `}
            >
              {person.name}
            </span>
            <p
              css={css`
                text-align: left;
              `}
            >
              {person.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ToitTeam;
