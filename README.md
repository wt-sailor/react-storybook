# React Storybook with Next.js

A modern component library built with Next.js, TypeScript, TailwindCSS, and Storybook with SCSS styling.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS for Next.js app
- **SCSS** - Styling for Storybook components
- **Storybook 10** - Component development environment
- **Vite** - Fast build tool for Storybook

## 📦 Components

All components are built with SCSS and fully documented in Storybook:

### Button
- **Variants**: Primary, Secondary, Success, Danger, Warning
- **Sizes**: Small, Medium, Large
- **Features**: Disabled state, hover effects, animations

### Alert
- **Variants**: Info, Success, Warning, Error
- **Features**: Optional title, closable, slide-in animation

### Tooltip
- **Positions**: Top, Bottom, Left, Right
- **Features**: Hover trigger, fade-in animation, arrow indicators

### Popover
- **Positions**: Top, Bottom, Left, Right
- **Features**: Click trigger, click-outside to close, optional title

## 🛠️ Getting Started

### Install Dependencies
```bash
npm install
```

### Run Next.js Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the component showcase.

### Run Storybook
```bash
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) to view components in Storybook.

### Build for Production
```bash
# Build Next.js app
npm run build

# Build Storybook
npm run build-storybook
```

## 📁 Project Structure

```
react-storybook/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page showcasing components
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Button.tsx
│   ├── Button.scss
│   ├── Button.stories.tsx
│   ├── Alert.tsx
│   ├── Alert.scss
│   ├── Alert.stories.tsx
│   ├── Tooltip.tsx
│   ├── Tooltip.scss
│   ├── Tooltip.stories.tsx
│   ├── Popover.tsx
│   ├── Popover.scss
│   ├── Popover.stories.tsx
│   └── index.ts           # Component exports
├── .storybook/            # Storybook configuration
└── public/                # Static assets
```

## 🎨 Styling Architecture

- **Next.js App**: Uses TailwindCSS for utility-first styling
- **Storybook Components**: Uses SCSS for component-specific styles
  - SCSS provides better component encapsulation
  - Supports Tailwind-like utilities through custom SCSS
  - Enables advanced features like nesting, mixins, and variables

## 📝 Usage Example

```tsx
import { Button, Alert, Tooltip, Popover } from '@/components';

export default function MyPage() {
  return (
    <div>
      <Button variant="primary" label="Click me" />
      
      <Alert 
        variant="success" 
        title="Success!" 
        message="Operation completed" 
        closable 
      />
      
      <Tooltip content="Helpful hint" position="top">
        <span>Hover me</span>
      </Tooltip>
      
      <Popover 
        title="More Info" 
        content="Detailed information here" 
        position="bottom"
      >
        <button>Click me</button>
      </Popover>
    </div>
  );
}
```

## 🧪 Development

### Adding New Components

1. Create component files in `components/`:
   - `ComponentName.tsx` - React component
   - `ComponentName.scss` - SCSS styles
   - `ComponentName.stories.tsx` - Storybook stories

2. Export from `components/index.ts`

3. View in Storybook and use in Next.js pages

## 📄 License

MIT
