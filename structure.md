frontend/
│
├── public/
│   ├── logo.svg
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   └── DataTable.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── PageHeader.tsx
│   │   │
│   │   └── common/
│   │       ├── Loader.tsx
│   │       ├── EmptyState.tsx
│   │       └── ErrorMessage.tsx
│   │
│   ├── features/
│   │   │
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── authService.ts
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Overview.tsx
│   │   │   ├── StatsCards.tsx
│   │   │   ├── AudienceChart.tsx
│   │   │   └── QuickInsights.tsx
│   │   │
│   │   ├── workspaces/
│   │   │   ├── WorkspaceList.tsx
│   │   │   ├── WorkspaceSettings.tsx
│   │   │   └── TeamMembers.tsx
│   │   │
│   │   ├── clients/
│   │   │   ├── ClientList.tsx
│   │   │   ├── ClientDetails.tsx
│   │   │   └── ClientForm.tsx
│   │   │
│   │   ├── social-accounts/
│   │   │   ├── SocialAccounts.tsx
│   │   │   ├── ConnectAccount.tsx
│   │   │   ├── AccountCard.tsx
│   │   │   └── accountService.ts
│   │   │
│   │   ├── publishing/
│   │   │   ├── Posts.tsx
│   │   │   ├── CreatePost.tsx
│   │   │   ├── PostEditor.tsx
│   │   │   ├── MediaUploader.tsx
│   │   │   ├── ContentCalendar.tsx
│   │   │   └── publishingService.ts
│   │   │
│   │   ├── inbox/
│   │   │   ├── UnifiedInbox.tsx
│   │   │   ├── ConversationList.tsx
│   │   │   ├── MessagePanel.tsx
│   │   │   ├── CommentPanel.tsx
│   │   │   └── inboxService.ts
│   │   │
│   │   ├── analytics/
│   │   │   ├── Analytics.tsx
│   │   │   ├── PerformanceChart.tsx
│   │   │   ├── PlatformMetrics.tsx
│   │   │   ├── TopPosts.tsx
│   │   │   └── analyticsService.ts
│   │   │
│   │   ├── research/
│   │   │   ├── Research.tsx
│   │   │   ├── InstagramResearch.tsx
│   │   │   ├── YouTubeResearch.tsx
│   │   │   └── researchService.ts
│   │   │
│   │   └── reports/
│   │       ├── Reports.tsx
│   │       ├── ReportBuilder.tsx
│   │       └── ExportReport.tsx
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useWorkspace.ts
│   │   └── useSocialAccounts.ts
│   │
│   ├── services/
│   │   ├── api.ts
│   │   └── queryClient.ts
│   │
│   ├── store/
│   │   ├── authStore.ts
│   │   └── workspaceStore.ts
│   │
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   └── ProtectedRoute.tsx
│   │
│   ├── types/
│   │   ├── user.ts
│   │   ├── client.ts
│   │   ├── post.ts
│   │   └── social-account.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env
├── .env.example
├── package.json
├── tsconfig.json
└── vite.config.ts