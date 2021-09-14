import { css } from "@emotion/react";
import React from "react";
import adafruitSvg from "../../assets/images/logos/adafruit.svg";
import iotTimes from "../../assets/images/logos/iot-times.svg";
import embeddedComputing from "../../assets/images/logos/embedded-computing-design.svg";
import staceySvg from "../../assets/images/logos/stacey.svg";
import cnx from "../../assets/images/logos/cnx.svg";
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
        name="Adafruit"
        logo={adafruitSvg}
        link="https://blog.adafruit.com/2021/06/02/create-and-continuously-update-the-code-on-your-microcontrollers-with-toit-iot-internetofthings/"
      >
        “Create and continuously update the code on your microcontrollers with Toit. Kasper Lund discusses a new way of
        building applications for the internet of things using a virtual machine and Toit.”
      </Blog>
      <Blog
        name="Open Cloudware"
        logo={opencloudwareSvg}
        link="https://opencloudware.com/toit-platform-redefines-the-way-we-implement-iot-applications/"
      >
        “Toit platform redefines the way we implement IoT applications.” A look into the features of Toit programming
        language.
      </Blog>
      <Blog
        logo={staceySvg}
        link="https://staceyoniot.com/toit-wants-to-be-a-platform-for-constrained-networked-devices/"
      >
        Now, thanks to a Danish company called Toit, there’s another option for managing a cluster of networked and
        resource-constrained computers.
      </Blog>
      <Blog
        logo={iotTimes}
        link="https://iot.eetimes.com/resolving-the-complexities-in-iot-development-with-the-support-of-apis-and-high-level-languages/"
      >
        To stand out from the crowd, Toit took a completely different approach with which even a $2 ESP32 can be turned
        into a full computer.
      </Blog>
      <Blog
        logo={embeddedComputing}
        link="https://www.embeddedcomputing.com/technology/software-and-os/ides-application-programming/product-of-the-week-toit-software-platform"
      >
        Why isn’t there a programming language yet that has been optimized for the IoT? Well, there is..
      </Blog>
      <Blog
        logo={cnx}
        link="https://www.cnx-software.com/2021/08/06/microsoft-azure-iot-balena-particle-toit-iot-development-platform-comparision/"
      >
        By splitting the firmware and apps code, Toit allows you to deploy multiple applications on the same device in a
        much lighter and agile process.
      </Blog>
    </div>
  );
}

function Blog({
  name,
  logo,
  link,
  children,
}: {
  name?: string;
  logo: string;
  link: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          font-weight: bold;
        `}
      >
        <img
          css={css`
            height: 4rem;
            margin-right: 1rem;
          `}
          src={logo}
          alt="Logo"
        />
        {name ?? ""}
      </div>
      <div
        css={css`
          margin: 1rem 0;
          flex: 1;
        `}
      >
        {children}
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
