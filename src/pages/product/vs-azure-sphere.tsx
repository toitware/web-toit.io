import { css } from "@emotion/react";
import React from "react";
import airUpdatesSvg from "../../assets/images/illustrations/chip.svg";
import Layout from "../../components/layout";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import VersusMenu from "../../components/VersusMenu";
import VersusReasons from "../../components/VersusReasons";
import { dartSecondary } from "../../theme";

export function CloudPage(): JSX.Element {
  return (
    <Layout title="Connectivity options">
      <PageTitle
        title="Compare Toit"
        subTitle="Product"
        css={css`
          background: ${dartSecondary.string()};
          padding-bottom: 6rem;
        `}
      />
      <VersusMenu active="azure-sphere" />
      <Section>
        <SideBySide illustration={airUpdatesSvg}>
          <h1>Toit vs Azure Sphere</h1>
          <p>
            Microsoft Azure Sphere provides traditional IoT development capabilities on specific ARM-based dev kits,
            while Toit offers a modern development environment that lets you run several memory-isolated apps in
            parallel on ESP32-based devices.
          </p>
          <p>
            With easy onboarding, fleet management capabilities and built-in data pipeline, Toit lets you build a fully
            functional POC within a week.
          </p>
        </SideBySide>
        <VersusReasons
          reasons={[
            {
              name: "Robustness",
              description:
                "Toit lets you run several memory isolated apps in parallel. With traditional systems like Microsoft Azure Sphere, all functionality directly access the same memory.",
            },
            {
              name: "High-level language",
              description:
                "Use a modern high-level language with stack traces and garbage collection to write apps and access peripherals. With Toit, any developer can write IoT applications.",
            },
            {
              name: "Built-in data pipeline",
              description:
                "With Toit, data transfer happens in the background, independent from data measurements. The Toit firmware includes all you need to securely transfer your data to the cloud, without having to build your own scheduler.",
            },
            {
              name: "Transparent pricing",
              description:
                "At Toit, you pay based only on how much data flows through our cloud. You can use our console or build your own to check your device fleet’s health, we do not add extra fees for licensing, access to a fleet management dashboard, additional users or devices, or support.",
            },
          ]}
        />
      </Section>
    </Layout>
  );
}

export default CloudPage;
