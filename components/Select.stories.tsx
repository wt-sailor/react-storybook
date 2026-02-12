import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Components/Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: '', label: 'Select an option' },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    label: 'Choose an option',
    options: options,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    options: options,
    error: true,
    helperText: 'You must select an option',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: options,
    disabled: true,
    value: 'option1',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Select',
    options: options,
    fullWidth: true,
  },
};
