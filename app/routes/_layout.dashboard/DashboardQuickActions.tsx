import { Stack, SvgIcon, Typography } from "@mui/material";
import {
  Account,
  FileDocumentOutline,
  HelpCircleOutline,
  Plus,
} from "@opengov/react-capital-assets";
import { QuickAction } from "~/lib/components/QuickAction";

const quickActions = [
  {
    title: "Submit Request",
    description: "Start a new service request",
    icon: <SvgIcon component={Plus} inheritViewBox />,
    to: "#",
  },
  {
    title: "View History",
    description: "Past submissions & activity",
    icon: <SvgIcon component={FileDocumentOutline} inheritViewBox />,
    to: "#",
  },
  {
    title: "Update Profile",
    description: "Manage your account",
    icon: <SvgIcon component={Account} inheritViewBox />,
    to: "/account",
  },
  {
    title: "Get Support",
    description: "24/7 Help",
    icon: <SvgIcon component={HelpCircleOutline} inheritViewBox />,
    to: "/support",
  },
];

export function DashboardQuickActions() {
  return (
    <>
      <Typography variant="h3">Quick Actions</Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} width="100%">
        {quickActions.map((action) => (
          <QuickAction key={action.title} {...action} />
        ))}
      </Stack>
    </>
  );
}

