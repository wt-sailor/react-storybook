'use client';

import { Button, Alert, Tooltip, Popover } from '@/components';

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
