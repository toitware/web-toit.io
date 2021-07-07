import { css } from "@emotion/react";
import React from "react";
import adafruitSvg from "../../assets/images/logos/adafruit.svg";
import ekorauSvg from "../../assets/images/logos/ekorau.svg";
import opencloudwareSvg from "../../assets/images/logos/opencloudware.svg";
import { ButtonLink } from "../../components/button";
import { breakpoints } from "../global-css";

export function ExternalBlogs({ className }: { className?: string }): JSX.Element {
  return (
    <div
      className={className}
      css={css`
        display: grid;
        grid-template-columns: 1fr;
        justify-content: space-between;
        grid-gap: 4.5rem;
        text-align: left;
        @media (min-width: 500px) {
          grid-template-columns: repeat(2, minmax(12rem, 1fr));
        }
        ${breakpoints.medium} {
          grid-template-columns: repeat(3, minmax(15rem, 1fr));
        }
      `}
    >
      <Blog
        logo={adafruitSvg}
        link="https://blog.adafruit.com/2021/06/02/create-and-continuously-update-the-code-on-your-microcontrollers-with-toit-iot-internetofthings/"
      >
        Create and continuously update the code on your microcontrollers with Toit. Kasper Lund discusses a new way of
        building applications for the internet of things using a virtual machine and Toit.
      </Blog>
      <Blog
        logo={opencloudwareSvg}
        link="https://opencloudware.com/toit-platform-redefines-the-way-we-implement-iot-applications/"
      >
        Toit platform redefines the way we implement IoT applications. A look into the features of Toit programming
        language.
      </Blog>
      <Blog logo={ekorauSvg} link="https://www.ekorau.com/first-driver-in-toit/">
        Implementing their first driver in Toit: To get a sense of the driver development process, David re-implemented
        a fragment of the BME280 driver.
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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
          flex: 1;
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
      <ButtonLink
        css={css`
          width: 100%;
        `}
        href={link}
        variant="outlined"
      >
        Read More
      </ButtonLink>
    </div>
  );
}

export default ExternalBlogs;
