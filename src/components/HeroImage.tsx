import { css } from "@emotion/react";
import React from "react";

export type Props = {
  image: string;
  imageWidth: number;
  containerHeightRem?: number;
};

export const HeroImage: React.FC<Props> = ({ image, imageWidth, containerHeightRem = 20 }) => {
  return (
    <div
      css={css`
        display: block;
        position: relative;
        overflow: hidden;
        text-align: center;
        height: ${containerHeightRem}rem;
        padding: 0 var(--contentPadding);
      `}
    >
      <img
        css={css`
          width: ${imageWidth}px;
          max-width: none !important;
        `}
        src={image}
      />
    </div>
  );
};

export default HeroImage;
