import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export type Props = {
  src: string;
  width: string | number;
  height: string | number;
  className?: string;
};

export const LazyImage: React.FC<Props> = ({ src, width, height, className }) => {
  return (
    <LazyLoadImage
      className={className}
      width={width}
      height={height}
      src={src}
      placeholder={
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          width={width}
          height={height}
        />
      }
    />
  );
};

export default LazyImage;
