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
