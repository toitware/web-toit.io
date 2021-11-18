import { css } from "@emotion/react";
import React from "react";
import airUpdatesSvg from "../../assets/images/illustrations/over-the-air-updates.svg";
import Layout from "../../components/layout";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import VersusMenu from "../../components/VersusMenu";
import VersusReasons from "../../components/VersusReasons";
import { dartSecondary } from "../../theme";

export function CloudPage(): JSX.Element {
  return (
    <Layout
      title="Compare Balena IoT platform with Toit"
      description="Toit's containers are smaller than Balena's so they fit on the ESP32, and OTAs are more likely to succeed even on shaky cellular connection."
    >
      <PageTitle
        title="Compare Toit"
        subTitle="Product"
        css={css`
          background: ${dartSecondary.string()};
          padding-bottom: 6rem;
        `}
      />
      <VersusMenu active="balena" />
      <Section>
        <SideBySide illustration={airUpdatesSvg} illustrationMaxWidth="20rem">
          <h1>Toit vs Balena</h1>
          <p>
            Both Toit and Balena offer a solution that includes fleet management and OTA deployment of containers with
            only the diffs between the previously installed version and the newest one.
          </p>
          <p>
            The main difference between balena and Toit lies in the size of these containers, where the ones deployed by
            Toit are so small they fit on MCUs capable of running on batteries for a very long time.
          </p>
          <p>
            In addition, OTAs with Toit happen faster and are thus more likely to complete successfully even on a shaky
            cellular connection.
          </p>
        </SideBySide>
        <VersusReasons
          reasons={[
            {
              name: "Battery-driven devices",
              description:
                "An ESP32 running Toit enables your devices to last a very long time on a strict power budget, unlike Balena which runs on a Linux machine that needs to be connected to power.",
            },
            {
              name: "Built-in data pipeline",
              description:
                " Balena does not offer a built-in mechanism for streaming telemetry data. The Toit firmware includes all you need to securely stream your data to the cloud, without having to rely on an additional (sometimes costly) third-party service.",
            },
            {
              name: "Responsiveness",
              description:
                "Balena containers can be 100MB or more, which means that an OTA update will take several minutes to complete even on a reliable WiFi connection. Toit never sends more than 1MB of data so an OTA happens in seconds. This means that you can work agile even with your devices in production.",
            },
            {
              name: "Transparent pricing",
              description:
                "At Toit, you pay only for how many devices are serviced through our cloud. We do not add extra fees for additional users or better support.",
            },
            {
              name: "Cheaper designs",
              description:
                "Customers have achieved a 70% reduction in hardware cost by switching to ESP-32-based devices.",
            },
          ]}
        />
      </Section>
    </Layout>
  );
}

export default CloudPage;
