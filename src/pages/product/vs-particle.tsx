import { css } from "@emotion/react";
import React from "react";
import blocksSvg from "../../assets/images/illustrations/blocks.svg";
import Layout from "../../components/layout";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import VersusMenu from "../../components/VersusMenu";
import VersusReasons from "../../components/VersusReasons";
import { dartSecondary } from "../../theme";

export function CloudPage(): JSX.Element {
  return (
    <Layout title="Toit vs Particle">
      <PageTitle
        title="Compare Toit"
        subTitle="Product"
        css={css`
          background: ${dartSecondary.string()};
          padding-bottom: 6rem;
        `}
      />
      <VersusMenu active="particle" />
      <Section>
        <SideBySide illustration={blocksSvg}>
          <h1>Toit vs Particle</h1>
          <p>
            Particle sells ready-made ARM-based development boards and provides fleet management solutions to get
            started with your IoT product. However, IoT development is done the traditional way, where all functionality
            directly accesses the same memory.
          </p>
          <p>
            Toit provides a modern development environment that lets you run several memory-isolated apps in parallel,
            ultimately leading to shorter time to market.
          </p>
        </SideBySide>
        <VersusReasons
          reasons={[
            {
              name: "Robustness",
              description:
                "Toit lets you run several memory-isolated apps in parallel. With traditional systems like Particle, all functionality directly access the same memory.",
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
              name: "No locked-in hardware",
              description: "With Toit you can build devices designed exactly how you want them to be.",
            },
          ]}
        />
      </Section>
    </Layout>
  );
}

export default CloudPage;
