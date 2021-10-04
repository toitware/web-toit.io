import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC } from "react";
import checkkmarkSvg from "../assets/images/small-checkmark.svg";
import { breakpoints } from "../components/global-css";

type ReasonsProps = {
  reasons: Reason[];
};
type Reason = {
  name: string;
  description?: string;
};

const Wrapper = styled.div`
  margin-top: var(--contentPadding);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${breakpoints.small} {
    align-items: center;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 1.5rem var(--contentPadding);
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
`;

const ListItem = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: inherit;
  font-family: inherit;
  margin: 0 0 0.5rem 0;
`;

export const Reasons: FC<ReasonsProps> = ({ reasons }) => {
  return (
    <Wrapper>
      <List>
        {reasons.map((reason) => {
          return (
            <ListItem key={reason.name}>
              <div>
                <Title>
                  {reason.name}
                  <img
                    css={css`
                      margin-left: 0.5rem;
                      width: 1.4em;
                      position: relative;
                      top: 3px;
                    `}
                    src={checkkmarkSvg}
                    alt=""
                  />
                </Title>
                <p
                  css={css`
                    margin: 0;
                    font-size: 0.875em;
                  `}
                >
                  {reason.description}
                </p>
              </div>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default Reasons;
