import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    rows: { control: 'number' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Enter your feedback',
    error: true,
    helperText: 'Feedback cannot be empty',
    value: '',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'Cannot type here',
    disabled: true,
    value: 'This is read-only content',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Textarea',
    placeholder: 'Takes up full width',
    fullWidth: true,
    rows: 4,
  },
};
