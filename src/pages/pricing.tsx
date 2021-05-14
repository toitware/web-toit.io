import { css } from "@emotion/react";
import React from "react";
import CheckmarkSvg from "../assets/images/icons/checkmark.inline.svg";
import Layout from "../components/layout";
import CenteredBlock from "../components/layout/CenteredBlock";
import PageTitle from "../components/layout/PageTitle";
import Section from "../components/layout/Section";
import PricingBlock from "../components/pricing-block";
import { black, dartSecondary, golden, goldenSecondary, passionSecondary } from "../theme";

const featureCss = css`
  text-align: center;
  white-space: nowrap;
  margin: 1.5rem;
`;

export function PricingPage(): JSX.Element {
  return (
    <Layout title="Pricing">
      <PageTitle title="Start free, pay for what you need" subTitle="Pricing" />
      <Section
        css={css`
          padding-top: 1.5rem;
          &::before {
            content: "";
            position: absolute;
            top: 35%;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${golden.string()};
            border-top: 2px solid ${black.string()};
          }
        `}
      >
        <CenteredBlock>
          You pay based on how much data is transferred through our platform with your devices.
        </CenteredBlock>

        <PricingBlock />
      </Section>
      <Section centered>
        <h2>Why Toit?</h2>
        <p>Grow the business at your pace</p>
        <ul
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
            list-style: none;
            padding: 0;
            margin: 3rem auto;
          `}
        >
          <li css={featureCss}>
            <CheckmarkSvg style={{ color: dartSecondary.string() }} />
            <br />
            No signup cost
          </li>
          <li css={featureCss}>
            <CheckmarkSvg style={{ color: goldenSecondary.string() }} />
            <br />
            No provisioning cost
          </li>
          <li css={featureCss}>
            <CheckmarkSvg style={{ color: passionSecondary.string() }} />
            <br />
            No subscription fee
          </li>
        </ul>
      </Section>
    </Layout>
  );
}

export default PricingPage;
