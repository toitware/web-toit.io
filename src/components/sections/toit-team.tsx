import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { breakpoints } from "../global-css";
import Link from "../link";

export type Person = {
  name: string;
  image: JSX.Element;
  description: JSX.Element;
};

const imageSize = 256;

const people: Person[] = [
  {
    name: "Florian Loitsch",
    image: (
      <StaticImage
        placeholder="blurred"
        src="../../assets/images/team/florian.png"
        alt="Florian Loitsch"
        width={imageSize}
        height={imageSize}
      />
    ),
    description: (
      <div>
        Florian Loitsch is a programming language and compiler specialist. He was the tech lead for the business
        critical <Link href="https://webdev.dartlang.org/tools/dart2js">Dart-to-JavaScript compiler</Link> at Google and
        in charge of the evolution of the{" "}
        <Link href="https://en.wikipedia.org/wiki/Dart_(programming_language)">Dart language</Link>.
      </div>
    ),
  },
  {
    name: "Kasper Lund",
    image: (
      <StaticImage
        placeholder="blurred"
        src="../../assets/images/team/kasper.png"
        alt="Kasper Lund"
        width={imageSize}
        height={imageSize}
      />
    ),
    description: (
      <div>
        Kasper Lund spent 12 years at Google as a senior staff engineer and site lead. He co-founded the{" "}
        <Link href="https://en.wikipedia.org/wiki/Chrome_V8%22">V8</Link> and{" "}
        <Link href="https://en.wikipedia.org/wiki/Dart_(programming_language)">Dart</Link> projects, and led the team
        that brought{" "}
        <Link href="https://blog.chromium.org/2010/12/new-crankshaft-for-v8.html">
          adaptive optimizations to JavaScript
        </Link>
        , finally making the web fast.
      </div>
    ),
  },
];
export function ToitTeam({ className }: { className?: string }): JSX.Element {
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
