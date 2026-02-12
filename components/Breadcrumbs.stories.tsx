import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Smartphones', isActive: true },
];

export const Default: Story = {
  args: {
    items: items,
  },
};

export const CustomSeparator: Story = {
  args: {
    items: items,
    separator: '>',
  },
};

export const CustomSeparatorIcon: Story = {
  args: {
    items: items,
    separator: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    ),
  },
};
