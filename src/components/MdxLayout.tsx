import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { components, shorthands } from "../mdx-components";
import Layout from "./layout";

interface Props {
  children: React.ReactNode;
  pageContext: {
    frontmatter: {
      title: string;
      path?: string;
    };
  };
}

export default function MdxLayout(props: Props): JSX.Element {
  const { pageContext, children } = props;
  return (
    <Layout title={pageContext.frontmatter.title}>
      <MDXProvider components={{ ...shorthands, ...components }}>{children}</MDXProvider>
    </Layout>
  );
}
