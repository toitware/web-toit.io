import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Color from "color";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import { clampBuilder } from "../../components/global-css";
import Section from "../../components/layout/Section";
import { dart, golden, python } from "../../theme";

SwiperCore.use([Autoplay]);

export type Quote = {
  author: string;
  text: string;
};

const quotes: Quote[] = [
  { author: "JS", text: "What you created here is nothing else than an astonishing technical marvel!" },
  {
    author: "Twitter",
    text: "Been dreaming about a Balena like service for ESP32 for a while. Think you guys just nailed it.",
  },
  {
    author: "Revibe",
    text: "I really appreciate your support and this Slack workspace, it's a big difference from spending days searching through cryptic and incomplete documentation which I've done quite a bit with STM",
  },
  {
    author: "David from Mezrit",
    text: "Discovery is pretty good, I have the necessary devices, find the tooling + console to be straightforward (onboarding is stunningly easy), and your team’s responsiveness on Slack is tremendous.",
  },
  {
    author: "Anonymous user",
    text: "I saw Toit on linkedIn. seems like a kid of RTOS on steroids? (...) looks amazing. I have 10 000 hours in C on ESP32 and I'm wondering why I put in all that effort.",
  },
  {
    author: "Jasper Pons",
    text: 'Finally the true power of the ESP has been unlocked, looking forward to getting on "to it".',
  },
];

type Props = {
  className?: string;
};

const QuoteContainer = styled.div`
  padding-left: var(--calculatedContentPadding);
  padding-right: var(--calculatedContentPadding);
  display: flex;
  place-content: center;
`;

const Quote = styled.div`
  border: 2px solid black;
  font-size: ${clampBuilder("small", "large", 1.2, 1.875)};
  line-height: 1.5;
  border-radius: 5px;
  padding: 3rem;
  max-width: 40rem;
`;

const colors: Color[] = [golden, python, dart];
export function QuotesSection({ className }: Props): JSX.Element {
  return (
    <Section
      css={css`
        padding-left: 0;
        padding-right: 0;
      `}
      className={className}
    >
      <Swiper autoplay={{ delay: 10000 }}>
        {quotes.map((quote, i) => {
          const color = colors[i % 3];
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
