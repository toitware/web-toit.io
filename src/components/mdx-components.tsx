/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Link, Typography } from "@material-ui/core";
import { MDXProviderComponentsProp } from "@mdx-js/react";
import React from "react";
import Block from "./block";
import Editor from "./editor";
import { Feature, Features } from "./features";
import GetStartedButton from "./getstarted-button";
import { HighLight, HighLights } from "./highlights";
import { HorizontalBlock, HorizontalBlockItem } from "./horizontal-block";
import { CodeIcon, ConnectionIcon } from "./icons";
import { ExtendedPricingOption, StandardPricingOption } from "./pricing-option";

const P = (props: any) => <Typography {...props} />;
const H1 = (props: any) => <Typography variant="h1" {...props} />;
const H2 = (props: any) => <Typography variant="h2" {...props} />;
const H3 = (props: any) => <Typography variant="h3" {...props} />;
const H4 = (props: any) => <Typography variant="h4" {...props} />;
const H5 = (props: any) => <Typography variant="h5" {...props} />;
const H6 = (props: any) => <Typography variant="h6" {...props} />;
const A = (props: any) => <Link color="error" {...props} />;

export const components: MDXProviderComponentsProp = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: A,
};

export const shorthands = {
  Block,
  HorizontalBlock,
  HorizontalBlockItem,
  Editor,
  HighLights,
  HighLight,
  Features,
  Feature,
  StandardPricingOption,
  ExtendedPricingOption,
  CodeIcon,
  ConnectionIcon,
  GetStartedButton,
};
