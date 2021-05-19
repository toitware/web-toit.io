import { css } from "@emotion/react";
import React, { useRef } from "react";
import { useViewportPosition } from "../helper";
import { dartSecondary } from "../theme";

export const ApiCalls: React.FC = () => {
  const overflowSize = 150;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLUListElement>(null);

  useViewportPosition(
    wrapperRef,
    (position) => {
      if (!ref.current) return;
      ref.current.style.transform = `translateY(${(0 - (position - 0.5) * 2) * overflowSize}px)`;
    },
    { maxStep: 0.01 }
  );

  return (
    <div
      ref={wrapperRef}
      css={css`
        height: 100%;
        width: 100%;
        min-height: 30rem;
        position: relative;
        overflow: hidden;
        ::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            to bottom,
            ${dartSecondary.string()},
            ${dartSecondary.alpha(0.5).string()} 5%,
            ${dartSecondary.alpha(0).string()} 30%,
            ${dartSecondary.alpha(0).string()} 70%,
            ${dartSecondary.alpha(0.5).string()} 95%,
            ${dartSecondary.string()}
          );
        }
      `}
    >
      <ul
        ref={ref}
        css={css`
          position: absolute;
          top: -${overflowSize + 50}px;
          bottom: -${overflowSize + 50}px;
          margin: 0;
          padding: 0;
          font-family: "Roboto Mono", monospace;
          font-size: 2em;
          font-weight: bold;
          color: white;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          li {
            list-style: none;
          }
        `}
      >
        {[
          "login",
          "getDevice",
          "configureDevice",
          "lookupDevices",
          "listDevices",
          "listJobs",
          "installJob",
          "createApiKey",
          "rebootDevice",
          "lookupDevice",
          "setPassword",
          "getOrganization",
          "listUsers",
          "createUser",
          // "watchJobChanges",
          // "getCurrentUser",
          // "listOrganizations",
          // "listPaymentInvoices",
          // "updateUser",
          // "compile",
          // "analyze",
          // "syntaxAnalyze",
          // "lspAnalyze",
          // "getProgram",
          // "getCompilation",
          // "lookupPrograms",
          // "deviceRun",
          // "decodeSystemMessage",
          // "runStart",
          // "run",
        ].map((apiCall) => (
          <li key={apiCall}>{apiCall}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCalls;
