'use client';

import { 
  Button, Alert, Tooltip, Popover, 
  Typography, Input, Checkbox, Radio, Select, Textarea,
  Breadcrumbs, Tabs 
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Storybook Components Showcase
          </h1>
          <p className="text-xl text-gray-600">
            Built with Next.js, TypeScript, TailwindCSS & SCSS
          </p>
        </div>

        {/* Typography Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Typography</h2>
          <div className="space-y-4">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="body1">
              Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="caption" color="text-secondary">
              Caption text goes here
            </Typography>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Navigation</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Breadcrumbs</h3>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Components', href: '#' },
                { label: 'Navigation', isActive: true }
              ]} 
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tabs</h3>
            <Tabs 
              items={[
                { id: 'tab1', label: 'Overview', content: <div className="p-4 bg-gray-50 rounded">Content for Overview tab</div> },
                { id: 'tab2', label: 'Details', content: <div className="p-4 bg-gray-50 rounded">Content for Details tab</div> },
                { id: 'tab3', label: 'Settings', content: <div className="p-4 bg-gray-50 rounded">Content for Settings tab</div> }
              ]} 
            />
          </div>
        </section>

        {/* Form Controls Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Form Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Input label="Username" placeholder="Enter username" />
              <Input label="Email" placeholder="Enter email" error helperText="Invalid email address" />
              <Input label="Search" placeholder="Search..." startIcon={<span>🔍</span>} />
            </div>
            
            <div className="space-y-4">
              <Select 
                label="Role" 
                options={[
                  { value: '', label: 'Select a role' },
                  { value: 'admin', label: 'Administrator' },
                  { value: 'user', label: 'User' },
                  { value: 'guest', label: 'Guest' }
                ]} 
              />
              <Textarea label="Bio" placeholder="Tell us about yourself" rows={3} />
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Checkbox label="Subscribe to newsletter" />
                <Checkbox label="I agree to terms" defaultChecked />
                <Checkbox label="Disabled option" disabled />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Radio label="Option A" name="radio-group" value="a" />
                <Radio label="Option B" name="radio-group" value="b" defaultChecked />
                <Radio label="Disabled" name="radio-group" value="c" disabled />
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="primary" label="Primary" />
            <Button variant="secondary" label="Secondary" />
            <Button variant="success" label="Success" />
            <Button variant="danger" label="Danger" />
            <Button variant="warning" label="Warning" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="small" label="Small" />
            <Button variant="primary" size="medium" label="Medium" />
            <Button variant="primary" size="large" label="Large" />
            <Button variant="primary" label="Disabled" disabled />
          </div>
        </section>

        {/* Alerts Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Alerts</h2>
          <div className="space-y-4">
            <Alert
              variant="info"
              title="Information"
              message="This is an informational alert message."
              closable
            />
            <Alert
              variant="success"
              title="Success"
              message="Your action was completed successfully!"
              closable
            />
            <Alert
              variant="warning"
              title="Warning"
              message="Please review this warning before proceeding."
              closable
            />
            <Alert
              variant="error"
              title="Error"
              message="An error occurred while processing your request."
              closable
            />
          </div>
        </section>

        {/* Tooltips Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tooltips</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center min-h-[200px]">
            <Tooltip content="Tooltip on top" position="top">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Hover (Top)
              </button>
            </Tooltip>
            <Tooltip content="Tooltip on bottom" position="bottom">
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Hover (Bottom)
              </button>
            </Tooltip>
            <Tooltip content="Tooltip on left" position="left">
              <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
                Hover (Left)
              </button>
            </Tooltip>
            <Tooltip content="Tooltip on right" position="right">
              <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                Hover (Right)
              </button>
            </Tooltip>
          </div>
        </section>

        {/* Popovers Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Popovers</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center min-h-[200px]">
            <Popover
              title="Popover Title"
              content="This is the popover content. Click outside to close."
              position="top"
            >
              <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                Click (Top)
              </button>
            </Popover>
            <Popover
              title="Popover Title"
              content="This is the popover content. Click outside to close."
              position="bottom"
            >
              <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
                Click (Bottom)
              </button>
            </Popover>
            <Popover
              title="Popover Title"
              content="This is the popover content. Click outside to close."
              position="left"
            >
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                Click (Left)
              </button>
            </Popover>
            <Popover
              title="Popover Title"
              content="This is the popover content. Click outside to close."
              position="right"
            >
              <button className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition">
                Click (Right)
              </button>
            </Popover>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Run <code className="bg-gray-100 px-2 py-1 rounded">npm run storybook</code> to view components in Storybook
          </p>
          <p className="text-gray-600">
            Run <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> to view this page
          </p>
        </div>
      </div>
    </div>
  );
}
