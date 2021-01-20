import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { AppBar, Button }  from "@material-ui/core"

interface GraphType {
  site: {
    siteMetadata: {
      title: string;
    } | null;
  };
}

interface Props {
  children: any;
}

export default function Layout({ children }: Props) {
  const data: GraphType = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <AppBar position="static">
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign up</Button>
      </AppBar>
      <Helmet title={data.site.siteMetadata?.title}></Helmet>
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>{children}</div>
    </>
  );
}
