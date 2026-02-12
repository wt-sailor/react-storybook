import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tabs } from './Tabs';

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabItems = [
  { id: 'tab1', label: 'Account', content: 'Manage your account settings here.' },
  { id: 'tab2', label: 'Password', content: 'Change your password here.' },
  { id: 'tab3', label: 'Notifications', content: 'Configure your notification preferences.' },
];

export const Default: Story = {
  args: {
    items: tabItems,
  },
};

export const WithDisabledTab: Story = {
  args: {
    items: [
      ...tabItems,
      { id: 'tab4', label: 'Billing (Disabled)', content: 'Billing information', disabled: true },
    ],
  },
};

export const PreselectedTab: Story = {
  args: {
    items: tabItems,
    defaultActiveId: 'tab2',
  },
};

export const ComplexContent: Story = {
  args: {
    items: [
      { 
        id: 'overview', 
        label: 'Overview', 
        content: (
          <div>
            <h3 style={{ marginTop: 0 }}>Dashboard Overview</h3>
            <p>Welcome to your dashboard. Here is a summary of your activity.</p>
            <ul>
              <li>Total Visits: 1,234</li>
              <li>New Users: 56</li>
            </ul>
          </div>
        ) 
      },
      { 
        id: 'settings', 
        label: 'Settings', 
        content: <button>Edit Settings</button> 
      },
    ],
  },
};
