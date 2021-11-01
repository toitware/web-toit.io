import styled from "@emotion/styled";
import React from "react";

const TooltipWrapper = styled.div`
  --bg-color: white;
  display: inline-block;
  position: relative;
  background: var(--bg-color);
  border-radius: 3px;
  font-size: 0.875em;
  padding: 0.5em 1em;
  &::after {
    --size: 0.4em;
    content: "";
    background: var(--bg-color);
    display: inline-block;
    padding: var(--size);
    transform: rotate(-45deg);
    position: absolute;
    left: calc(50% - var(--size));
    top: calc(-1 * var(--size));
  }
`;

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Tooltip({ children, className }: Props): JSX.Element {
  return <TooltipWrapper className={className}>{children}</TooltipWrapper>;
}
export default Tooltip;
