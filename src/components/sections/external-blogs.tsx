import { css } from "@emotion/react";
import React from "react";
import adafruitSvg from "../../assets/images/logos/adafruit.svg";
import ekorauSvg from "../../assets/images/logos/ekorau.svg";
import opencloudwareSvg from "../../assets/images/logos/opencloudware.svg";
import { ButtonLink } from "../../components/button";

export function ExternalBlogs({ className }: { className?: string }): JSX.Element {
  return (
    <div
      className={className}
      css={css`
        display: flex;
        text-align: left;
        justify-content: space-between;
        gap: 1.5rem;
        flex-wrap: wrap;
      `}
    >
      <Blog
        logo={adafruitSvg}
        link="https://blog.adafruit.com/2021/06/02/create-and-continuously-update-the-code-on-your-microcontrollers-with-toit-iot-internetofthings/"
      >
        Create and continuously update the code on your microcontrollers with Toit.
      </Blog>
      <Blog
        logo={opencloudwareSvg}
        link="https://opencloudware.com/toit-platform-redefines-the-way-we-implement-iot-applications/"
      >
        Toit platform redefines the way we implement IoT applications.
      </Blog>
      <Blog logo={ekorauSvg} link="https://www.ekorau.com/first-driver-in-toit/">
        Implementing their first driver in Toit.
      </Blog>
    </div>
  );
}

function Blog({ logo, link, children }: { logo: string; link: string; children: React.ReactNode }): JSX.Element {
  const domain = new URL(link).hostname;
  return (
    <div
      css={css`
        flex: 1;
        max-width: 15rem;
        min-width: 9rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1.5rem 0;
      `}
    >
      <img
        css={css`
          height: 4rem;
        `}
        src={logo}
        alt="Logo"
      />
      <div
        css={css`
          margin: 1rem 0;
        `}
      >
        {children}
      </div>
      <div
        css={css`
          margin: 1rem 0;
        `}
      >
        {domain}
      </div>
      <ButtonLink href={link} variant="outlined">
        Read More
      </ButtonLink>
    </div>
  );
}

export default ExternalBlogs;
