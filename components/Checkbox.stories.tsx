import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    label: 'Cannot uncheck',
    defaultChecked: true,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'This field is required',
    error: true,
  },
};
