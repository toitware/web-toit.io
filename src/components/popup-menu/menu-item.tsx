import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import * as menu from "../../content/menu.yaml";
import { Link } from "../link";
import { linkCss } from "./shared-styles";

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
`;

const GroupTitle = styled.h3`
  ${linkCss}
  font-size: 1rem;
  font-weight: normal;
  color: #888;
  margin: 0;
  padding: 0;
`;

export const MenuItem: React.FC<{ item: menu.MenuItem }> = ({ item }) => {
  if (item.href != undefined) {
    return (
      <a href={item.href} css={linkCss}>
        {item.title}
      </a>
    );
  } else if (item.path != undefined) {
    const to = item.path;
    if (item.subpages && item.subpages.length > 0) {
      return (
        <div>
          <GroupTitle>{item.title}</GroupTitle>
          <LinkList>
            {item.subpages.map((subPage) => (
              <li
                key={subPage.title}
                css={css`
                  margin: 0;
                  padding: 0;
                  list-style: none;
                `}
              >
                <Link to={`${to}${subPage.path ?? ""}`} href={subPage.href} css={[linkCss]}>
                  {subPage.title}
                </Link>
              </li>
            ))}
          </LinkList>
        </div>
      );
    } else {
      return (
        <Link to={to} css={linkCss}>
          {item.title}
        </Link>
      );
    }
  } else {
    return <span>Error: no path or to specified</span>;
  }
};

export default MenuItem;
