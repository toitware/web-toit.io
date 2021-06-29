import { css } from "@emotion/react";
import React from "react";
import connectivityPng from "../../assets/images/illustrations/connectivity.png";
import Layout from "../../components/layout";
import PageTitle from "../../components/layout/PageTitle";
import Section from "../../components/layout/Section";
import SideBySide from "../../components/layout/SideBySide";
import SignUpButton from "../../components/sign-up-button";
import { dartSecondary } from "../../theme";

export function CloudPage(): JSX.Element {
  return (
    <Layout title="Connectivity options">
      <PageTitle
        title="Connectivity options"
        subTitle="Product"
        css={css`
          background: ${dartSecondary.string()};
        `}
      />
      <Section>
        <SideBySide illustration={connectivityPng}>
          <p>When you run Toit, you get direct connectivity using the built-in WiFi of the ESP32.</p>
          <p>
            You can also connect any external communications module. Our platform has built-in support for the most
            commonly used GSM modules, and many of our customers use NB-IoT or LTE-M for connectivity.
          </p>
          <p>
            <SignUpButton />
          </p>
        </SideBySide>
      </Section>
    </Layout>
  );
}

export default CloudPage;
