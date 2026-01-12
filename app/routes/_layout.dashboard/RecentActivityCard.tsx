import { Box, Button, Divider, SvgIcon, Typography } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";
import { FileDocumentOutline, Folder } from "@opengov/react-capital-assets";
import { Link } from "react-router";
import { DashboardCardWrapper } from "~/lib/components/DashboardCardWrapper";

interface ActivityItem {
  id: string;
  title: string;
  date: string;
  status: "completed" | "pending" | "in-progress";
}

const mockActivities: ActivityItem[] = [
  {
    id: "1",
    title: "Service Request #1234",
    date: "Dec 1, 2024",
    status: "completed",
  },
  {
    id: "2",
    title: "Permit Application #5678",
    date: "Nov 28, 2024",
    status: "in-progress",
  },
];

interface ActivityCardItemProps {
  activity: ActivityItem;
}

function ActivityCardItem({ activity }: ActivityCardItemProps) {
  const statusColors = {
    completed: capitalDesignTokens.semanticColors.foreground.successSmall,
    pending: capitalDesignTokens.semanticColors.foreground.warningSmall,
    "in-progress": capitalDesignTokens.semanticColors.foreground.action,
  };

  const statusLabels = {
    completed: "Completed",
    pending: "Pending",
    "in-progress": "In Progress",
  };

  return (
    <DashboardCardWrapper
      sx={{ backgroundColor: capitalDesignTokens.semanticColors.background.secondary }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <SvgIcon
          component={FileDocumentOutline}
          inheritViewBox
          sx={{ color: capitalDesignTokens.semanticColors.foreground.action }}
        />
        <Box flex={1}>
          <Typography variant="bodyDefault">{activity.title}</Typography>
          <Typography
            variant="bodySmall"
            color={capitalDesignTokens.semanticColors.foreground.tertiary}
          >
            {activity.date}
          </Typography>
        </Box>
        <Typography
          variant="bodySmall"
          sx={{ color: statusColors[activity.status], fontWeight: 600 }}
        >
          {statusLabels[activity.status]}
        </Typography>
      </Box>
    </DashboardCardWrapper>
  );
}

interface RecentActivityCardProps {
  activities?: ActivityItem[];
  fullWidth?: boolean;
}

export function RecentActivityCard({
  activities = mockActivities,
  fullWidth = false,
}: RecentActivityCardProps) {
  if (activities.length === 0) {
    return (
      <DashboardCardWrapper
        width={fullWidth ? "100%" : { xs: "100%", sm: "100%", md: "50%" }}
        sx={{ gap: 2 }}
      >
        <Typography variant="h3">Recent Activity</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={4}
          gap={2}
        >
          <SvgIcon
            component={Folder}
            inheritViewBox
            sx={{
              fontSize: 48,
              color: capitalDesignTokens.semanticColors.foreground.tertiary,
            }}
          />
          <Typography variant="h4">No recent activity</Typography>
          <Typography
            variant="bodyDefault"
            color={capitalDesignTokens.semanticColors.foreground.secondary}
            textAlign="center"
          >
            Your recent submissions and updates will appear here
          </Typography>
        </Box>
      </DashboardCardWrapper>
    );
  }

  return (
    <DashboardCardWrapper
      width={fullWidth ? "100%" : { xs: "100%", sm: "100%", md: "50%" }}
      sx={{ gap: 2 }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Recent Activity</Typography>
        <Button component={Link} to="#">
          View All
        </Button>
      </Box>
      {activities.map((activity) => (
        <ActivityCardItem key={activity.id} activity={activity} />
      ))}
    </DashboardCardWrapper>
  );
}

