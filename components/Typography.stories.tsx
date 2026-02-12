import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'bold'],
    },
    color: {
      control: 'select',
      options: ['text-primary', 'text-secondary', 'primary', 'secondary', 'error', 'success', 'warning'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
    weight: 'bold',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
    weight: 'bold',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption details',
    color: 'text-secondary',
  },
};

export const Colored: Story = {
  args: {
    variant: 'h3',
    children: 'Colored Text',
    color: 'primary',
  },
};
