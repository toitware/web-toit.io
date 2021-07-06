import { css } from "@emotion/react";
import React, { useState } from "react";
import CenteredBlock from "../../components/layout/CenteredBlock";

export type Person = {
  name: string;
  image: string;
  description: string;
};

export function ToitTeam({ people }: { people: Person[] }): JSX.Element {
  const [selectedPerson, setSelectedPerson] = useState(0);

  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        `}
      >
        {people.map((person, i) => {
          return (
            <div
              key={person.name}
              css={css`
                flex: 1;
                text-align: center;
                min-width: 170px;
              `}
              onMouseOver={() => setSelectedPerson(i)}
              onClick={() => setSelectedPerson(i)}
            >
              <img width="160" height="160" src={person.image} alt={person.name} />
              <br />
              <span
                css={css`
                  font-weight: bold;
                `}
              >
                {person.name}
              </span>
            </div>
          );
        })}
      </div>
      <CenteredBlock>
        <p>{people[selectedPerson].description}</p>
      </CenteredBlock>
    </div>
  );
}

export default ToitTeam;
