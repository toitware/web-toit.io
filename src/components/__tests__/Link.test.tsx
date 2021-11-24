/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { StableClassNames } from "@toitware/testing-utils";
import React from "react";
import Link from "../link";

describe("Block", () => {
  it("uses GatsbyLink if 'to'", () => {
    const result = render(
      <StableClassNames>
        <Link to="/home">foobar</Link>
      </StableClassNames>
    );

    expect(result.container.firstChild).toMatchSnapshot();
  });
  it("uses a element if href is provided", () => {
    const result = render(
      <StableClassNames>
        <Link href="https://foobar">foobar</Link>
      </StableClassNames>
    );

    expect(result.container.firstChild).toMatchSnapshot();
  });
});
