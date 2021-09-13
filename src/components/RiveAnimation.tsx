import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRive, UseRiveParameters } from "rive-react";

const Canvas = styled.canvas`
  max-width: 100%;
`;

export type Props = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

export const RiveAnimation: React.FC<Props> = ({ src, width, height, className }) => {
  const params: UseRiveParameters = {
    src: src,
    autoplay: false,
  };
  const { rive, setCanvasRef } = useRive(params);

  if (rive) {
    rive.drawFrame();
    rive.scrub("Animation 1", 0);
    rive.startRendering();
  }

  const ref = useRef<HTMLCanvasElement>();
  const [isInitialized, setIsInitialized] = useState(false);

  const measuredRef = useCallback((node: HTMLCanvasElement) => {
    if (node !== null) {
      setCanvasRef(node);
      ref.current = node;
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!ref.current || !rive) return;

    console.log("setting up ovserver");
    const canvasElement = ref.current;

    const autoPlayObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !rive.isPlaying) {
          rive.play();
        }
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.9,
      }
    );
    autoPlayObserver.observe(canvasElement);

    return () => {
      autoPlayObserver.disconnect();
    };
  }, [isInitialized, ref.current, rive]);

  return <Canvas className={className} width={width * 2} height={height * 2} ref={measuredRef} />;
};

export default RiveAnimation;
