import { css } from "@emotion/react";
import React from "react";
import CheckmarkSvg from "../assets/images/icons/checkmark.inline.svg";
import { bigFont, clampBuilder, darkSection } from "../components/global-css";
import Layout from "../components/layout";
import PageTitle from "../components/layout/PageTitle";
import Section from "../components/layout/Section";
import PricingBlock from "../components/pricing-block-preview";
import PricingCalculator from "../components/pricing-calculator/PricingCalculator";
import { dart, dartSecondary, golden, goldenSecondary, passionSecondary } from "../theme";

const featureCss = css`
  text-align: center;
  white-space: nowrap;
  margin: 1.5rem;
`;

export function PricingPage(): JSX.Element {
  return (
    <Layout title="Pricing">
      <PageTitle
        css={css`
          h1 {
            max-width: 8em;
          }
        `}
        title="Start free, pay for data only"
        subTitle="Pricing"
      />
      <Section
        css={css`
          padding-top: 4.5rem;
          background: ${golden.string()};
        `}
      >
        <div
          css={css`
            ${bigFont}
            margin: 3rem auto;
            text-align: center;
            max-width: 21em;
          `}
        >
          Pay for data - and only data.
          <br /> Use edge computing to minimize your cost, and always get 100MB for free every month.
        </div>

        <PricingBlock />

        <div
          css={css`
            text-align: center;
            margin-top: 3rem;
          `}
        >
          <div
            css={css`
              font-family: "ClashDisplay", Verdana, sans-serif;
              font-size: 1.875rem;
              max-width: 12em;
              margin: 1.5rem auto;
              line-height: 1.3;
              strong {
                color: ${dart.string()};
              }
            `}
          >
            Deploying more than <strong>1,000</strong> devices?
          </div>
          <div>
            <a href="mailto:sales@toit.io">Contact us</a> and we will get you started.
          </div>
        </div>
      </Section>
      <Section css={[darkSection]} centered>
        <h2>Cost estimate</h2>
        <p
          css={css`
            max-width: 26em;
            margin-left: auto;
            margin-right: auto;
          `}
        >
          Get a rough estimate of how much data devices typically consume and the costs associated with them
        </p>
        <PricingCalculator
          css={css`
            margin-top: ${clampBuilder("tiny", "huge", 4.5, 9)};
          `}
        />
      </Section>
      <Section centered>
        <h2>No additional fees</h2>
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
            Support included
          </li>
          <li css={featureCss}>
            <CheckmarkSvg style={{ color: goldenSecondary.string() }} />
            <br />
            Unlimited devices
          </li>
          <li css={featureCss}>
            <CheckmarkSvg style={{ color: passionSecondary.string() }} />
            <br />
            No developer licenses
          </li>
        </ul>
      </Section>
    </Layout>
  );
}

export default PricingPage;
