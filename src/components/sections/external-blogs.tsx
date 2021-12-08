import { css } from "@emotion/react";
import React from "react";
import AdafruitSvg from "../../assets/images/logos/adafruit.inline.svg";
import IotTimes from "../../assets/images/logos/iot-times.inline.svg";
import EmbeddedComputing from "../../assets/images/logos/embedded-computing-design.inline.svg";
import StaceySvg from "../../assets/images/logos/stacey.inline.svg";
import Cnx from "../../assets/images/logos/cnx.inline.svg";
import OpencloudwareSvg from "../../assets/images/logos/opencloudware.inline.svg";
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
        Logo={AdafruitSvg}
        link="https://blog.adafruit.com/2021/06/02/create-and-continuously-update-the-code-on-your-microcontrollers-with-toit-iot-internetofthings/"
      >
        “Create and continuously update the code on your microcontrollers with Toit. Kasper Lund discusses a new way of
        building applications for the internet of things using a virtual machine and Toit.”
      </Blog>
      <Blog
        name="Open Cloudware"
        Logo={OpencloudwareSvg}
        link="https://opencloudware.com/toit-platform-redefines-the-way-we-implement-iot-applications/"
      >
        “Toit platform redefines the way we implement IoT applications.” A look into the features of Toit programming
        language.
      </Blog>
      <Blog
        Logo={StaceySvg}
        link="https://staceyoniot.com/toit-wants-to-be-a-platform-for-constrained-networked-devices/"
      >
        Now, thanks to a Danish company called Toit, there’s another option for managing a cluster of networked and
        resource-constrained computers.
      </Blog>
      <Blog
        Logo={IotTimes}
        link="https://iot.eetimes.com/resolving-the-complexities-in-iot-development-with-the-support-of-apis-and-high-level-languages/"
      >
        To stand out from the crowd, Toit took a completely different approach with which even a $2 ESP32 can be turned
        into a full computer.
      </Blog>
      <Blog
        Logo={EmbeddedComputing}
        link="https://www.embeddedcomputing.com/technology/software-and-os/ides-application-programming/product-of-the-week-toit-software-platform"
      >
        Why isn’t there a programming language yet that has been optimized for the IoT? Well, there is..
      </Blog>
      <Blog
        Logo={Cnx}
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
  Logo,
  link,
  children,
}: {
  name?: string;
  Logo: React.FunctionComponent;
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
        <Logo
          css={css`
            height: 4rem;
            margin-right: 1rem;
          `}
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
