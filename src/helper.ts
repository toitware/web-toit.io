import { RefObject, useEffect } from "react";

/**
 * Converts a linear value interpolation (from 0.0 to 1.0) to an ease-out
 * interpolation (also from 0.0 to 1.0).
 */
export const easeOut = (value: number): number => (1 - Math.cos(value * Math.PI)) / 2;

/**
 * Returns a number from 0.0 to 1.0 corresponding to the visibility in the
 * viewport. When it just starts appearing at the top it bottom at 0.0,
 * and when it's scrolls out of view at the top, it's a 1.0.
 */
export const getViewportPosition = (element: HTMLElement): number => {
  const clientRect = element.getBoundingClientRect();
  const elementTop = clientRect.top;
  const start = window.innerHeight;
  const end = -clientRect.height;
  return Math.max(0.0, Math.min(1.0, (elementTop - start) / (end - start)));
};

/**
 * Invokes the callback every time given element is in the viewport.
 *
 * The position passed to the callback is the value determined by
 * `getViewportPosition`.
 *
 * This function however takes care of a few other things like interpolation
 * steps (to avoid jagged animation on stepped mouse scrolling) and
 * adding/removing the observers when needed.
 */
export const useViewportPosition = (
  ref: RefObject<HTMLElement>,
  callback: (position: number) => void,
  options: {
    // The maximumg amount of steps that should be jumped from one position to
    // the next. This allows for a smooth animation even when scrolling with
    // the mouse.
    maxStep?: number;
  } = {}
): void => {
  const { maxStep = 0.03 } = options;

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    let isAnimating = false;

    const startAnimating = () => {
      if (!isAnimating) {
        isAnimating = true;
        loopCycle();
      }
    };
    const stopAnimating = () => {
      isAnimating = false;
    };

    let prevPosition = 0.0;

    // Using a loop cycle with animation frame instead of a scroll listener
    // so we can interpolate between different positions.
    const loopCycle = () => {
      const top = Math.max(0.0, element.getBoundingClientRect().top + window.scrollY - window.innerHeight);
      const bottom = element.getBoundingClientRect().bottom + window.scrollY;

      let position = (window.scrollY - top) / (bottom - top);

      // Add some linear interpolation between the steps.
      if (Math.abs(position - prevPosition) > maxStep) {
        if (position > prevPosition) {
          position = prevPosition + maxStep;
        } else {
          position = prevPosition - maxStep;
        }
      }

      prevPosition = position;
      callback(position);

      if (isAnimating) {
        window.requestAnimationFrame(loopCycle);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimating();
        } else {
          stopAnimating();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      stopAnimating();
    };
  }, [ref.current]);
};
