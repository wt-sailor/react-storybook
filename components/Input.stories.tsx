import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    value: 'invalid-email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true,
    value: 'Some value',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startIcon: <span>🔍</span>,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'Takes up full width',
    fullWidth: true,
  },
};
