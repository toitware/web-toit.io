import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breakpoints } from "../global-css";

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  gap: var(--columnSeparatorWidth);

  ${breakpoints.small} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  max-width: 32rem;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1:first-of-type,
  h2:first-of-type,
  p:first-of-type {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

const Illustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.small} {
    &.left {
      grid-row: 1;
    }
  }
`;

const IllustrationElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 100%;
  }

  /* Prevent the Chromecast icon from appearing on android devices */
  video::-internal-media-controls-overlay-cast-button {
    display: none;
  }
`;

type SideBySideProps = {
  title?: string;
  children: ReactNode;
  illustration: string | JSX.Element;
  illustrationPosition?: "left" | "right";
  illustrationMaxWidth?: string;
  illustrationWidth?: number;
  illustrationHeight?: number;
  unboxedIllustration?: boolean;
  className?: string;
};

export function SideBySide({
  children,
  className,
  illustration,
  illustrationPosition = "right",
  illustrationMaxWidth = "32rem",
  illustrationWidth,
  illustrationHeight,
  unboxedIllustration = false,
}: SideBySideProps): JSX.Element {
  const illustrationElement =
    typeof illustration === "string" ? (
      <LazyLoadImage width={illustrationWidth} height={illustrationHeight} src={illustration} />
    ) : (
      illustration
    );
  return (
    <Wrapper className={className}>
      <Content>
        <div>{children}</div>
      </Content>
      <Illustration className={illustrationPosition}>
        {unboxedIllustration && illustrationElement}
        {!unboxedIllustration && (
          <IllustrationElement
            css={css`
              max-width: ${illustrationMaxWidth};
            `}
          >
            {illustrationElement}
          </IllustrationElement>
        )}
      </Illustration>
    </Wrapper>
  );
}

export default SideBySide;
