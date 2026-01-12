---
description: "React Router 7 flat routes convention for portal applications"
globs: ["app/routes/**/*.tsx", "app/routes.ts"]
alwaysApply: false
---

# React Router 7 Flat Routes Convention

## Route Naming

This template uses React Router's flat routes convention:

- `_layout` - Prefix for routes sharing a layout (uses `<Outlet />`)
- `_layout.dashboard` - Creates `/dashboard` route with shared layout
- `_layout.account` - Creates `/account` route with shared layout
- `_index.tsx` - Index route (redirects or default content)

## Folder Structure

```
app/routes/
├── _index.tsx              # Root redirect
├── _layout/
│   └── route.tsx           # Shared layout with NavBar
├── _layout.dashboard/
│   ├── route.tsx           # Dashboard page
│   ├── WelcomeCard.tsx     # Route-specific component
│   └── ...
├── _layout.account/
│   └── route.tsx           # Account page
└── _layout.support/
    └── route.tsx           # Support page
```

## Layout Pattern

Layout routes export a component that renders `<Outlet />`:

```tsx
// app/routes/_layout/route.tsx
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <Box>
      <NavBar ... />
      <Outlet /> {/* Child routes render here */}
    </Box>
  );
}
```

## Route Types

Import route-specific types from the generated types:

```tsx
import type { Route } from "./+types/route";

export const meta: Route.MetaFunction = () => [
  { title: "Page Title" },
];

export const loader: Route.LoaderFunction = async () => {
  return { data: "..." };
};

export default function Page({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.data}</div>;
}
```

## Adding New Routes

1. Create a new folder: `app/routes/_layout.newpage/`
2. Add `route.tsx` with the page component
3. Add route-specific components in the same folder
4. Update navigation in `_layout/route.tsx` if needed

## Route-Specific Components

Keep route-specific components in their route folder:

```
app/routes/_layout.dashboard/
├── route.tsx               # Main route component
├── WelcomeCard.tsx         # Only used in dashboard
├── RecentActivityCard.tsx  # Only used in dashboard
└── DashboardQuickActions.tsx
```

Shared components go in `app/lib/components/`.
