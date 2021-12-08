import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import boxesSvg from "../../assets/images/illustrations/boxes.svg";
import microcontrollersSvg from "../../assets/images/illustrations/microcontrollers.svg";
import ContentSpacer from "../../components/ContentSpacer";
import { darkSection } from "../../components/global-css";
import Layout from "../../components/layout";
import CenteredBlock from "../../components/layout/CenteredBlock";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import Link from "../../components/link";
import { pythonSecondary } from "../../theme";

export function CloudPage(): JSX.Element {
  return (
    <Layout
      title="Supported hardware for the Toit firmware"
      description="Toit runs on the ESP32 chip from Espressif. $2 gets you 520 KB RAM, built-in WiFi and 34 pins for peripherals that you can use in any way you want."
    >
      <PageTitle
        title="Supported hardware"
        subTitle="Product"
        css={css`
          background: ${pythonSecondary.string()};
        `}
      />

      <Section centered css={darkSection}>
        <h2 className="h1">ESP32 micro&shy;controllers</h2>

        <CenteredBlock>
          <p>
            Toit runs on the ESP32 chip from Espressif. We chose the ESP32 because it offers the best price /
            performance out of all the microcontrollers out there. For $2 or less you get 520 KB RAM, built-in WiFi and
            34 pins for peripherals that you can use in any way you want.
          </p>
        </CenteredBlock>

        <p>
          <strong>
            You can buy them{" "}
            <Link href="https://www.digikey.com/en/products/detail/espressif-systems/ESP32-DEVKITC-32E/12091810">
              here
            </Link>
            .
          </strong>
        </p>

        <ContentSpacer />

        <img src={microcontrollersSvg} />
      </Section>

      <Section>
        <SideBySide
          illustration={
            <StaticImage
              placeholder="blurred"
              src="../../assets/images/illustrations/peripherals.png"
              alt="Collection of motors"
            />
          }
          illustrationWidth={1024}
          illustrationHeight={1024}
          illustrationPosition="left"
        >
          <h2 className="h1">Peripherals</h2>

          <p>
            Toit supports any peripheral you plug into your ESP32 through the GPIO pins, such as Bosch BME280 and
            Sensirion SHT4x environment sensors, and step and servo motors.
          </p>
          <p>You can connect using hardware accelerated I2C, SPI, PWM or UART protocols.</p>
        </SideBySide>

        <ContentSpacer />

        <SideBySide
          illustration={boxesSvg}
          illustrationPosition="right"
          illustrationWidth={749}
          illustrationHeight={749}
        >
          <h2 className="h1">Out-of-the-box drivers</h2>

          <p>
            The Toit ecosystem comes with ready-to-use drivers for many of the commonly used peripherals, including GSM
            modules, sensors and actuators. They can be accessed directly from Toit using our package manager.
          </p>

          <p>
            And don’t worry if the driver for your favorite sensor is not available yet, it&apos;s really easy to write
            your own in the Toit language.
          </p>
        </SideBySide>
      </Section>
    </Layout>
  );
}

export default CloudPage;
