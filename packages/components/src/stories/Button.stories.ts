import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';


const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
title: "Default",
padding: "p-2",
margin: "m-1",
backgroundColor: "black",
textColor: "white",
borderColor: "yellow",
fontSize: "text-lg"
  },
};

export const Disable: Story = {
  args: {
    title: "Disable",
     disable: true
  },
};

