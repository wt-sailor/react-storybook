import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
    children: <button style={{ padding: '10px 20px' }}>Hover me (Top)</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'bottom',
    children: <button style={{ padding: '10px 20px' }}>Hover me (Bottom)</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'left',
    children: <button style={{ padding: '10px 20px' }}>Hover me (Left)</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'right',
    children: <button style={{ padding: '10px 20px' }}>Hover me (Right)</button>,
  },
};
