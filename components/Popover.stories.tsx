import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Popover } from './Popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
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
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {
  args: {
    title: 'Popover Title',
    content: 'This is the popover content. Click outside to close.',
    position: 'bottom',
    children: <button style={{ padding: '10px 20px' }}>Click me (Bottom)</button>,
  },
};

export const Top: Story = {
  args: {
    title: 'Popover Title',
    content: 'This is the popover content. Click outside to close.',
    position: 'top',
    children: <button style={{ padding: '10px 20px' }}>Click me (Top)</button>,
  },
};

export const Left: Story = {
  args: {
    title: 'Popover Title',
    content: 'This is the popover content. Click outside to close.',
    position: 'left',
    children: <button style={{ padding: '10px 20px' }}>Click me (Left)</button>,
  },
};

export const Right: Story = {
  args: {
    title: 'Popover Title',
    content: 'This is the popover content. Click outside to close.',
    position: 'right',
    children: <button style={{ padding: '10px 20px' }}>Click me (Right)</button>,
  },
};

export const WithoutTitle: Story = {
  args: {
    content: 'This popover has no title, just content.',
    position: 'bottom',
    children: <button style={{ padding: '10px 20px' }}>No Title</button>,
  },
};
