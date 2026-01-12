---
description: "OpenGov infrastructure architecture and platform services context"
globs: []
alwaysApply: false
---

# OpenGov Infrastructure Architecture

This rule provides context about the infrastructure and platform services that power OpenGov applications.

## Platform Overview

OpenGov runs on AWS with Kubernetes orchestration, using infrastructure-as-code practices.

```
┌─────────────────────────────────────────────────────────────────┐
│                         AWS Cloud                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   EKS       │  │   RDS       │  │   Data Platform         │  │
│  │  ┌───────┐  │  │  PostgreSQL │  │  ┌─────────┐ ┌───────┐  │  │
│  │  │NestJS │  │  │             │  │  │Redshift │ │Metabase│  │  │
│  │  │ APIs  │  │  └─────────────┘  │  └─────────┘ └───────┘  │  │
│  │  ├───────┤  │                   │                         │  │
│  │  │Spring │  │  ┌─────────────┐  └─────────────────────────┘  │
│  │  │ Batch │  │  │   Redis     │                               │
│  │  ├───────┤  │  │   Cache     │  ┌─────────────────────────┐  │
│  │  │React  │  │  └─────────────┘  │   Storage               │  │
│  │  │ SSR   │  │                   │  ┌─────────┐             │  │
│  │  └───────┘  │  ┌─────────────┐  │  │   S3    │             │  │
│  └─────────────┘  │   Kafka     │  │  │ Buckets │             │  │
│                   │   Events    │  │  └─────────┘             │  │
│  ┌─────────────┐  └─────────────┘  └─────────────────────────┘  │
│  │  Temporal   │                                                │
│  │  Workflows  │                                                │
│  └─────────────┘                                                │
└─────────────────────────────────────────────────────────────────┘
```

## Core Services

### AWS EKS (Kubernetes)
- Container orchestration for all services
- Auto-scaling based on load
- Service mesh for inter-service communication
- Managed by Terraform

### Managed PostgreSQL (RDS)
- Primary transactional database
- Multi-AZ deployment for high availability
- Read replicas for reporting queries

### Redis
- Session storage for portal users
- Application caching
- Rate limiting for public APIs

### Kafka
- Event streaming platform
- Async communication between services
- Event sourcing patterns
- Notification dispatch

### Temporal
- Durable workflow orchestration
- Payment processing workflows
- Application submission workflows
- Bill generation processes

## Data Platform

### S3
- Document and file storage (permits, applications, etc.)
- Bill PDFs and statements
- User-uploaded documents

### Redshift
- Data warehouse for analytics
- Usage reporting
- Trend analysis

### Metabase
- Administrative dashboards
- Embedded analytics (if applicable)

## Infrastructure as Code

### Terraform
All infrastructure is managed via Terraform:
- VPC and networking
- EKS cluster configuration
- RDS instances
- S3 buckets
- IAM roles and policies

## Portal-Specific Integration Patterns

### Document Uploads
Citizens uploading documents (permits, applications):

```tsx
// 1. Request upload URL from API
const { uploadUrl, documentId } = await api.getUploadUrl({
  filename: file.name,
  contentType: file.type,
});

// 2. Upload directly to S3
await fetch(uploadUrl, {
  method: 'PUT',
  body: file,
  headers: { 'Content-Type': file.type },
});

// 3. Confirm upload with API
await api.confirmUpload(documentId);
```

### Payment Processing
Payments go through Temporal workflows:

```tsx
// Initiate payment - returns immediately
const { paymentId } = await api.initiatePayment(paymentData);

// Poll for status or receive WebSocket update
const status = await api.getPaymentStatus(paymentId);
// status: 'processing' | 'completed' | 'failed'
```

### Real-time Notifications
For status updates on applications, permits, etc.:

```tsx
// Option 1: Polling (simpler)
useEffect(() => {
  const interval = setInterval(checkStatus, 30000);
  return () => clearInterval(interval);
}, []);

// Option 2: WebSocket (real-time)
useWebSocket('/ws/notifications', {
  onMessage: (event) => updateStatus(event.data),
});
```

### Bill Downloads
Bills are pre-generated and stored in S3:

```tsx
// API returns signed URL for bill PDF
const { downloadUrl } = await api.getBillPdf(billId);
window.open(downloadUrl, '_blank');
```
