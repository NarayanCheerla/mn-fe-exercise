import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header";

const meta = {
  title: "Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Header",
    size: "md"
  },
};

export const Small: Story = {
  args: {
    title: "Default Header",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    title: "Default Header",
    size: "lg"
  },
};
