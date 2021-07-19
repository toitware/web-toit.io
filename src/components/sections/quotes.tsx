import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Color from "color";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import LeftSvg from "../../assets/images/icons/left-arrow.inline.svg";
import RightSvg from "../../assets/images/icons/right-arrow.inline.svg";
import { breakpoints, clampBuilder } from "../../components/global-css";
import Section from "../../components/layout/Section";
import { dart, golden, passion, python, tiger } from "../../theme";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export type Quote = {
  author: string;
  text: string;
};

const quotes: Quote[] = [
  { author: "Jürgen Specht", text: "What you created here is nothing else than an astonishing technical marvel!" },
  {
    author: "@jowvianna on Twitter",
    text: "Been dreaming about a balena-like service for ESP32 for a while. Think you guys just nailed it.",
  },
  {
    author: "ReVibe Energy",
    text: "I really appreciate your support and this Slack workspace, it's a big difference from spending days searching through cryptic and incomplete documentation which I've done quite a bit with STM",
  },
  {
    author: "David from Mezrit",
    text: "Toit is an elegant, powerful language and standard library, the tooling + console is straightforward (device onboarding is stunningly easy), and the teams responsiveness on Slack is tremendous.",
  },
  // {
  //   author: "Jasper Pons",
  //   text: "I saw Toit on linkedIn. It seems like a kind of RTOS on steroids? I have 10 000 hours in C on ESP32 and I’m wondering why I put in all that effort.",
  // },
  // {
  //   author: "Jasper Pons",
  //   text: 'Finally the true power of the ESP has been unlocked, looking forward to getting on "to it".',
  // },
];

type Props = {
  className?: string;
};

const QuoteContainer = styled.div`
  padding-left: var(--calculatedContentPadding);
  padding-right: var(--calculatedContentPadding);
  display: flex;
  place-content: center;
  margin-bottom: 3rem;
`;

const Quote = styled.div`
  border: 2px solid black;
  font-size: ${clampBuilder("small", "large", 1.2, 1.875)};
  line-height: 1.5;
  border-radius: 5px;
  padding: 3rem;
  max-width: var(--maxQuoteWidth);
`;

const arrowsCss = css`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 2.5rem);
  z-index: 50;
  display: none;
  ${breakpoints.small} {
    display: block;
  }
`;

const colors: Color[] = [golden, python, tiger, dart];
export function QuotesSection({ className }: Props): JSX.Element {
  return (
    <Section
      css={css`
        padding-left: 0;
        padding-right: 0;
        --maxQuoteWidth: ${clampBuilder("small", "large", 34, 40)};
        --arrowDistance: 6rem;
      `}
      className={className}
    >
      <LeftSvg
        className="quote-arrow-left"
        css={css`
          ${arrowsCss}
          left: calc(50% - var(--maxQuoteWidth) / 2 - var(--arrowDistance));
        `}
      />
      <RightSvg
        className="quote-arrow-right"
        css={css`
          ${arrowsCss}
          right: calc(50% - var(--maxQuoteWidth) / 2 - var(--arrowDistance));
        `}
      />
      <Swiper
        autoplay={{ delay: 10000 }}
        navigation={{ nextEl: ".quote-arrow-right", prevEl: ".quote-arrow-left" }}
        pagination={{ clickable: true, type: "bullets" }}
        loop
        css={css`
          --swiper-theme-color: ${dart.toString()};
          .swiper-wrapper {
            // Make sure slides are centered vertically.
            align-items: center;
          }
        `}
      >
        {quotes.map((quote, i) => {
          const color = colors[i % colors.length];
          return (
            <SwiperSlide key={quote.author}>
              <QuoteContainer>
                <Quote
                  css={css`
                    background-color: ${color.toString()};
                    color: ${color.isDark() ? "white" : "black"};
                  `}
                >
                  <div
                    css={css`
                      font-size: 0.875em;
                      margin-bottom: 1rem;
                    `}
                  >
                    {quote.author}
                  </div>
                  {quote.text}
                </Quote>
              </QuoteContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}
export default QuotesSection;
