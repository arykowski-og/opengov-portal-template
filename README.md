# OpenGov Portal Template

A modern [React Router 7](https://reactrouter.com) + [Vite](https://vitejs.dev) starter template for public-facing portals using OpenGov's Capital Design System.

This template is designed for building customer/citizen-facing portal applications with a clean, accessible interface.

## Prerequisites

This template uses OpenGov's private npm packages. You'll need to configure your npm credentials:

1. Get your NPM auth token from [OpenGov's guide](https://opengovinc.atlassian.net/wiki/spaces/DEV/pages/2679408319/Getting+and+configuring+NPM+access)
2. Add it to your `~/.npmrc`:

```
//registry.npmjs.org/:_authToken=npm_YOUR_TOKEN_HERE
```

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── lib/
│   │   └── components/         # Reusable components
│   │       ├── mui/            # MUI provider and utilities
│   │       ├── Header.tsx      # Page header component
│   │       ├── QuickAction.tsx # Quick action card
│   │       └── ...
│   ├── routes/                 # Route components (flat routes)
│   │   ├── _index.tsx          # Index redirect
│   │   ├── _layout/            # Main layout with nav
│   │   ├── _layout.dashboard/  # Dashboard page
│   │   ├── _layout.account/    # Account page
│   │   └── _layout.support/    # Support page
│   ├── root.tsx                # Root layout
│   └── routes.ts               # Route configuration
├── public/                     # Static assets
├── react-router.config.ts
├── vite.config.ts
└── package.json
```

## Features

- ⚡️ **Vite** - Lightning fast HMR and optimized builds
- 🚀 **React Router 7** - File-based routing with flat routes
- 🎨 **OpenGov Capital Design System** - MUI-based component library
- 📝 **TypeScript** - Type safety out of the box
- 🔍 **ESLint** - Code linting configured
- 📱 **Responsive** - Mobile-friendly design out of the box

## Key Dependencies

- `@opengov/capital-mui-theme` - OpenGov's MUI theme
- `@opengov/components-nav-bar` - Global navigation component
- `@opengov/react-capital-assets` - OpenGov icon library
- `@mui/material` - Material UI components
- `react-router` - React Router v7

## Customizing Your Portal

### 1. Update the App Name
In `app/routes/_layout/route.tsx`, change the `appName` prop:
```tsx
<NavBar appName="Your Portal Name" ... />
```

### 2. Configure Navigation
Update the `menuOptions` array in `_layout/route.tsx` to define your portal's navigation.

### 3. Add Dashboard Cards
Modify `app/routes/_layout.dashboard/` to add relevant dashboard cards for your portal.

### 4. Customize Quick Actions
Update `DashboardQuickActions.tsx` with actions relevant to your users.

### 5. Update Support Content
Customize `FrequentlyAskedQuestions.tsx` with your portal's FAQ content.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## Route Structure

This template uses React Router's flat routes convention:

- `_layout` - Prefix for routes that share a layout
- `_layout.dashboard` - `/dashboard` route
- `_layout.account` - `/account` route  
- `_layout.support` - `/support` route

## Learn More

- [React Router Documentation](https://reactrouter.com/start/framework/installation)
- [Material UI Documentation](https://mui.com)
- [OpenGov Capital Design System](https://storybook.development.opengov.zone/capital-mui-storybook/)

