# Complete Storybook & Next.js Setup Guide

This document covers everything from project initialization to creating and using components in this repository.

## 1. Project Overview

We are using a modern tech stack for building a Next.js application with a robust component library.

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: TypeScript
*   **App Styling**: [TailwindCSS](https://tailwindcss.com/)
*   **Component Styling**: SCSS (Sass)
*   **Component Documentation**: [Storybook](https://storybook.js.org/) (built with Vite)

## 2. Installation & Setup

If you are setting this up from scratch, follow these steps.

### Step 1: Initialize Next.js App
Create a new Next.js app with TypeScript, TailwindCSS, and ESLint.

```bash
npx create-next-app@latest . --typescript --tailwind --eslint
# Select 'App Router', 'No' to 'src/ directory', 'Yes' to import alias '@/*'
```

### Step 2: Install Storybook
Initialize Storybook in the project. This will detect the Next.js framework and set up the necessary configuration.

```bash
npx storybook@latest init
```

### Step 3: Install SCSS Support
Since our components use SCSS for styling, we need to install Sass.

```bash
npm install sass --save-dev
```

### Step 4: Configure Storybook for Custom Components
By default, Storybook looks for stories in the `stories` folder. We want to organize our components in a `components` folder.

Update `.storybook/main.ts` to include the `components` directory in the `stories` configuration:

```typescript
// .storybook/main.ts
const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)" // Add this line
  ],
  // ... other config
};
```

## 3. Project Structure

We follow a modular structure where each component has its own folder or set of files within `components/`.

```
react-storybook/
├── components/                 # Shared UI Components
│   ├── Button.tsx             # Component Logic
│   ├── Button.scss            # Component Styles
│   ├── Button.stories.tsx     # Storybook Configuration
│   └── index.ts               # Public API Export
├── app/                       # Next.js App Router
│   ├── page.tsx               # Main Page
│   └── globals.css            # Global Styles (Tailwind directives)
├── .storybook/                # Storybook Configuration
└── public/                    # Static Assets
```

## 4. Workflow: Creating a New Component

This is the standard workflow for adding a new UI component (e.g., `Card`).

### Step 1: Create Component Files
Create the necessary files in `components/`.

**`components/Card.tsx`**
```tsx
import React from 'react';
import './Card.scss';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__content">{children}</div>
    </div>
  );
};
```

**`components/Card.scss`**
```scss
.card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
}
```

**`components/Card.stories.tsx`**
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Hello World',
    children: 'This is a card component content.',
  },
};
```

### Step 2: Export Component
Add the component to `components/index.ts` to make it easily importable.

```typescript
// components/index.ts
export { Card } from './Card';
export type { CardProps } from './Card';
```

### Step 3: Verify in Storybook
Run Storybook to see your component in isolation.

```bash
npm run storybook
```
Visit [http://localhost:6006](http://localhost:6006).

## 5. Usage in Next.js

Import the component from `@/components` and use it in your pages.

```tsx
// app/page.tsx
import { Card } from '@/components';

export default function Page() {
  return (
    <div className="p-4">
      <Card title="My Feature">
        <p>This is using the shared component!</p>
      </Card>
    </div>
  );
}
```

## 6. Running the Project

*   **Development Server (Next.js)**: `npm run dev` (Runs on port 3000)
    *   Use this to see the full application.
*   **Storybook Server**: `npm run storybook` (Runs on port 6006)
    *   Use this to develop and document components in isolation.
