import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Radio } from './Radio';

const meta = {
  title: 'Components/Form/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'options',
    value: '1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected Option',
    name: 'options-checked',
    value: 'selected',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    name: 'options-disabled',
    value: 'disabled',
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    label: 'Selected & Disabled',
    name: 'options-disabled-checked',
    value: 'disabled-checked',
    defaultChecked: true,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Error Option',
    name: 'options-error',
    value: 'error',
    error: true,
  },
};
