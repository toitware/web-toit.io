import { css } from "@emotion/react";
import React from "react";
import ArtemisButton from "../components/artemis-button";
import { bigFont, clampBuilder, darkSection } from "../components/global-css";
import Layout from "../components/layout";
import CenteredBlock from "../components/layout/CenteredBlock";
import PageTitle from "../components/layout/PageTitle";
import Section from "../components/layout/Section";
import PricingBlock from "../components/pricing-block-preview";
import SignUpButton from "../components/sign-up-button";
import { dart, dartSecondary, golden } from "../theme";
import { Link } from "../components/link";

export function PricingPage(): JSX.Element {
  return (
    <Layout
      title="Simple pricing that works for everyone"
      description="Simple pricing for the Artemis fleet manager. $0.50 per device per month. 10 devices are free forever. No credit card needed."
      noDefaultSignup={true}
    >
      <PageTitle
        css={css`
          h1 {
            max-width: 10em;
          }
        `}
        title="Subscribe to serviceability"
        subTitle="Pricing"
      />
      <Section
        centered
        css={css`
          padding-top: 1.0rem;
          padding-bottom: 2.0rem;
          background: ${golden.string()};
        `}
      >
        <CenteredBlock css={bigFont}>
          The Toit framework is open-source. If you don&apos;t need our fleet
          management system, you can use the platform for free.
        </CenteredBlock>
        <SignUpButton />
      </Section>
      <Section
        centered
        css={css`
          padding-top: 2.5rem;
          background: ${dartSecondary.string()};
        `}
      >
        <h2>Fleet management</h2>
        <CenteredBlock css={bigFont}>
          You can also subscribe to our fleet management solution.
        </CenteredBlock>
        <CenteredBlock css={bigFont}>
          Each month you pay only for the devices you service through our platform.
        </CenteredBlock>

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
        <SectionDownArrow />
      </Section>
      <Section css={[darkSection]} centered>
        <h2>A robust fleet management system</h2>
        <p
          css={css`
            max-width: 26em;
            margin-left: auto;
            margin-right: auto;
          `}
        >
          Our framework allows you to focus on your applications. We take care of the
          tedious, but important, task of keeping your devices connected and up to date.
        </p>
      </Section>
      <Section
        centered
        css={css`
          padding-top: 1.0rem;
          padding-bottom: 2.0rem;
          background: ${golden.string()};
        `}
      >
        <h2>No additional fees</h2>
        <p
          css={css`
            max-width: 26em;
            margin-left: auto;
            margin-right: auto;
          `}
        >
          <strong>Your turned off, disconnected, or unserviced devices are free</strong> and keep running your
          applications, so you are in full control of your bill. Our support is always included.
          You can also
          remove our framework from your devices at any time; even over the air.
        </p>
      </Section>
      <CenteredBlock>
      <ArtemisButton />
      </CenteredBlock>
    </Layout>
  );
}

export function SectionDownArrow(): JSX.Element {
  const width = 88 / 16; // rem
  const height = 152 / 16; // rem

  const smallestRatio = 0.8;
  const biggestRatio = 1.25;

  const bottomOffsetRatio = 0.55;

  return (
    <svg
      css={css`
        position: absolute;
        left: 50%;
        z-index: 100;
        width: ${clampBuilder("tiny", "huge", width * smallestRatio, width * biggestRatio)};
        height: ${clampBuilder("tiny", "huge", height * smallestRatio, height * biggestRatio)};
        margin-left: ${clampBuilder("tiny", "huge", -((width * smallestRatio) / 2), -((width * biggestRatio) / 2))};
        bottom: ${clampBuilder(
          "tiny",
          "huge",
          -(height * smallestRatio * bottomOffsetRatio),
          -(height * biggestRatio * bottomOffsetRatio)
        )};
      `}
      width="88"
      height="152"
      viewBox="0 0 88 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.367 86.3112L34.4106 87.014L34.4234 87.0313L34.4367 87.0482L35.367 86.3112ZM17.6121 65.1467L18.2921 66.1193L18.3121 66.1053L18.3315 66.0905L17.6121 65.1467ZM3.58482 104.907L2.40557 105.041L2.4066 105.05L3.58482 104.907ZM15.2693 149.345C15.8685 149.611 16.5696 149.34 16.8352 148.741L21.1639 138.976C21.4295 138.377 21.1591 137.676 20.5599 137.41C19.9607 137.145 19.2596 137.415 18.994 138.014L15.1462 146.694L6.46649 142.847C5.86728 142.581 5.16619 142.851 4.90056 143.451C4.63493 144.05 4.90535 144.751 5.50456 145.016L15.2693 149.345ZM80.3864 93.7734L81.3844 94.4156L80.3864 93.7734ZM16.932 64.1741C2.94906 73.9513 0.639116 89.4809 2.4056 105.041L4.76404 104.774C3.03432 89.5369 5.37883 75.1486 18.2921 66.1193L16.932 64.1741ZM2.4066 105.05C3.79603 116.541 6.67546 128.031 14.643 148.687L16.8575 147.833C8.9313 127.284 6.12078 115.994 4.76303 104.765L2.4066 105.05ZM36.3234 85.6085C23.3705 67.9797 20.1072 52.1134 21.6684 38.2787C23.2343 24.4014 29.6688 12.4374 36.3469 2.66983L34.3875 1.33017C27.6181 11.2312 20.9388 23.5753 19.3097 38.0126C17.6758 52.4925 21.1362 68.9476 34.4106 87.014L36.3234 85.6085ZM34.4367 87.0482C39.0827 92.9131 46.9947 100.412 55.6367 103.663C59.98 105.297 64.5826 105.885 69.0602 104.567C73.5514 103.244 77.7593 100.049 81.3844 94.4156L79.3883 93.1313C76.002 98.394 72.2223 101.161 68.3896 102.29C64.5433 103.422 60.4856 102.952 56.4724 101.442C48.4014 98.4055 40.815 91.2772 36.2973 85.5743L34.4367 87.0482ZM81.3844 94.4156C87.0273 85.6459 87.463 78.0072 84.2055 71.8383C80.9978 65.7639 74.3587 61.4134 66.4823 58.7866C58.5776 56.1503 49.2502 55.1866 40.3921 56.0247C31.5455 56.8616 23.052 59.5075 16.8926 64.2028L18.3315 66.0905C24.0263 61.7494 32.0457 59.1985 40.6157 58.3877C49.1742 57.578 58.1671 58.5155 65.7314 61.0383C73.3241 63.5705 79.3027 67.637 82.1066 72.9467C84.8605 78.1618 84.7015 84.874 79.3883 93.1313L81.3844 94.4156Z"
        fill="white"
      />
    </svg>
  );
}

export default PricingPage;
