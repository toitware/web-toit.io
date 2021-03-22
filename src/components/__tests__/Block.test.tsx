import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { primaryTheme } from "../../theme";
import Block from "../block";
import { StableClassNames } from "@toitware/testing-utils";

describe("Block", () => {
  it("renders correctly", () => {
    const result = render(
      <StableClassNames>
        <Block theme={primaryTheme}>foobar</Block>
      </StableClassNames>
    );

    expect(result.container.firstChild).toMatchSnapshot();
  });
  it("uses paddingBottom", () => {
    const result = render(
      <StableClassNames>
        <Block paddingBottom={2} theme={primaryTheme}>
          foobar
        </Block>
      </StableClassNames>
    );

    const contentDiv = result.getByText("foobar") as HTMLDivElement;

    expect(result.container.firstChild).toMatchSnapshot();

    expect(contentDiv).toHaveStyle("padding-bottom: 16px");
  });
});
