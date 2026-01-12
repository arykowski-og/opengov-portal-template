---
description: "Backend architecture context for API integration and service communication"
globs: []
alwaysApply: false
---

# OpenGov Backend Architecture Context

This rule provides context about the backend services that this portal communicates with.

## Backend Technology Stack

### APIs and Workflows: Node.js + NestJS

- RESTful API endpoints
- GraphQL where applicable
- Workflow orchestration services
- Authentication/Authorization services

**When integrating with NestJS APIs:**
- Expect standard REST conventions (GET, POST, PUT, DELETE)
- Error responses follow consistent format with status codes
- Authentication via JWT tokens or session cookies
- API versioning in URL path (e.g., `/api/v1/`)

### Batch Processing: Java + Spring Boot

- Bill runs and billing cycles
- Report generation
- Payment processing jobs
- Notification dispatch

**When displaying batch job status:**
- Jobs may have states: PENDING, RUNNING, COMPLETED, FAILED
- Long-running operations use async patterns
- Progress tracking via polling or WebSocket

### Workflow Orchestration: Temporal

- Durable workflow execution
- Payment processing flows
- Permit/application approval workflows
- Multi-step citizen service requests

**When integrating with Temporal workflows:**
- Workflows return a workflow ID for tracking
- Query workflow status via API
- Workflows survive service restarts
- Show progress steps to users for multi-stage processes

## Portal-Specific API Patterns

### User Authentication

Portal users (citizens/customers) have different auth flows:

```tsx
// Login flow
const handleLogin = async (credentials) => {
  const response = await fetch('/api/v1/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  // Store token/session
};
```

### Account Data

Typical account-related endpoints:

- `GET /api/v1/account` - Current user's account
- `GET /api/v1/account/bills` - User's bills
- `GET /api/v1/account/payments` - Payment history
- `POST /api/v1/account/payments` - Make payment

### Public Data

Some endpoints don't require authentication:

- `GET /api/v1/public/announcements` - Public notices
- `GET /api/v1/public/faqs` - FAQ content
- `GET /api/v1/public/offices` - Office locations

## Data Fetching Patterns

### React Router Loaders

Use loaders for route-level data:

```tsx
export const loader: Route.LoaderFunction = async ({ request }) => {
  const response = await fetch('/api/v1/dashboard', {
    headers: getAuthHeaders(request),
  });
  
  if (!response.ok) {
    throw new Response("Failed to load", { status: response.status });
  }
  
  return response.json();
};

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  return <DashboardContent data={loaderData} />;
}
```

### Error States

Display user-friendly errors for portal users:

```tsx
import { ErrorState } from "~/lib/components/ErrorState";

// In error boundary or catch block
<ErrorState
  title="Unable to load your account"
  message="Please try again later or contact support."
  action={<Button onClick={retry}>Try Again</Button>}
/>
```

## Accessibility Considerations

Portal applications must be accessible:
- All form inputs have labels
- Error messages are announced to screen readers
- Focus management on route changes
- Color contrast meets WCAG standards
