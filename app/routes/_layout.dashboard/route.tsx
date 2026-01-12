import { Box, Stack } from "@mui/material";
import { Header } from "~/lib/components/Header";
import { PageContentWrapper } from "~/lib/components/PageContentWrapper";
import { FrequentlyAskedQuestions } from "~/lib/components/FrequentlyAskedQuestions";
import type { Route } from "./+types/route";
import { WelcomeCard } from "./WelcomeCard";
import { AccountStatusCard } from "./AccountStatusCard";
import { RecentActivityCard } from "./RecentActivityCard";
import { DashboardQuickActions } from "./DashboardQuickActions";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dashboard - OpenGov Portal" }];
}

export default function Dashboard() {
  // In a real app, this would come from session/auth
  const userName = "Resident";

  return (
    <>
      <Header
        title={`Hello, ${userName}!`}
        subtitle="Manage your account easily and securely"
      />
      <PageContentWrapper>
        <Box display="flex" flexDirection="column" gap={3} mx="auto" maxWidth="xl">
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={3}
            width="100%"
          >
            <WelcomeCard userName={userName} />
            <AccountStatusCard />
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={3}
            width="100%"
          >
            <RecentActivityCard fullWidth />
          </Stack>
          <DashboardQuickActions />
          <FrequentlyAskedQuestions />
        </Box>
      </PageContentWrapper>
    </>
  );
}
