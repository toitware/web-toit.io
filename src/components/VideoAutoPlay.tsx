import React, { useEffect, useRef } from "react";

export type Props = {
  videoUrl: string;
  autoRewind?: boolean;
};

export const VideoAutoPlay: React.FC<Props> = ({ videoUrl, autoRewind = false }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const videoElement = ref.current;

    videoElement.playbackRate = 1.5;

    let reset = true;

    const autoPlayObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && videoElement.paused && reset) {
          reset = false;
          void videoElement.play();
        }
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.9,
      }
    );
    autoPlayObserver.observe(videoElement);

    const rewindObserver = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          void videoElement.pause();
          videoElement.currentTime = 0;
          reset = true;
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.0,
      }
    );
    if (autoRewind) rewindObserver.observe(videoElement);

    const maxOffset = 100;

    const positionCallback = () => {
      if (!wrapperRef.current) return;
      const clientRect = wrapperRef.current.getBoundingClientRect();
      const elementTop = clientRect.top;
      const start = window.innerHeight;
      const end = -clientRect.height;
      const position = Math.max(0.0, Math.min(1.0, (elementTop - start) / (end - start)));

      const offset = maxOffset * ((position - 0.5) * 2);

      videoElement.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", positionCallback);

    return () => {
      autoPlayObserver.disconnect();
      if (autoRewind) rewindObserver.disconnect();
      window.removeEventListener("scroll", positionCallback);
    };
  }, [ref.current]);

  return (
    <div ref={wrapperRef}>
      <video ref={ref} muted playsInline>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoAutoPlay;
