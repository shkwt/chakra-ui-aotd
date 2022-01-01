---
to: packages/<%= fileName %>/stories/index.stories.tsx
unless_exists: true
---
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { <%= name %> } from "../src";

export default {
  title: "Components/<%= name %>",
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};