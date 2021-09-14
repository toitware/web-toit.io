import { css } from "@emotion/react";
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

  const ref = useRef<HTMLCanvasElement>();
  const intersectionRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Since we need to provide the canvas element to the rive player, we use
  // our own ref function that sets both the ref.current and the rive canvas.
  const measuredRef = useCallback((node: HTMLCanvasElement) => {
    if (node !== null) {
      setCanvasRef(node);
      ref.current = node;
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    // Make sure the first frame is visible until we start the animation.
    if (rive) {
      rive.drawFrame();
      rive.scrub("Animation 1", 0);
      rive.startRendering();
    }

    if (!isInitialized || !ref.current || !intersectionRef.current || !rive) return;

    // Setup the interesection observer to get notified when the element is
    // visible, and then start playing.
    const autoPlayObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        entry.intersectionRatio;
        if (entry.isIntersecting && !rive.isPlaying) {
          rive.play();
          autoPlayObserver.disconnect();
        }
      },
      {
        rootMargin: "50px 0px 50px 0px",
        threshold: 1,
      }
    );
    // We're using a special "intersection" element here, because otherwise the
    // we'll never get a full intersection with the canvas element when the
    // browser is too narrow.
    //
    // This is the easiest way to "capture" when the bottom of the canvas is
    // visible.
    autoPlayObserver.observe(intersectionRef.current);

    return () => {
      autoPlayObserver.disconnect();
    };
  }, [isInitialized, ref.current, intersectionRef.current, rive]);

  return (
    <div
      className={className}
      css={css`
        position: relative;
      `}
    >
      <Canvas width={width * 2} height={height * 2} ref={measuredRef} />
      <div ref={intersectionRef}></div>
    </div>
  );
};

export default RiveAnimation;
