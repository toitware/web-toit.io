/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MDXProviderComponentsProp } from "@mdx-js/react";
import React from "react";
import Block from "./components/block";
import Editor from "./components/editor";
import { HighLight, HighLights } from "./components/highlights";
import { HorizontalBlock, HorizontalBlockItem } from "./components/horizontal-block";
import { CodeIcon, ConnectionIcon } from "./components/icons";
import Section from "./components/layout/Section";
import Link from "./components/link";
import SignUpButton from "./components/sign-up-button";

const A = (props: any) => <Link color="error" {...props} />;

export const components: MDXProviderComponentsProp = {
  a: A,
};

export const shorthands = {
  Block,
  HorizontalBlock,
  HorizontalBlockItem,
  Editor,
  HighLights,
  HighLight,
  Section,
  CodeIcon,
  ConnectionIcon,
  SignUpButton: SignUpButton,
};
