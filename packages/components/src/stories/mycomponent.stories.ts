import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';


const meta = {
  title: 'Example/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
children: "Default"
  },
};

export const Disable: Story = {
  args: {
    children: "Disable",
     disable: true
  },
};

