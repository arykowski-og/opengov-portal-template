import { Stack, SvgIcon } from "@mui/material";
import {
  AccountOutline,
  CashMultiple,
  FileDocumentOutline,
} from "@opengov/react-capital-assets";
import { QuickAction } from "./QuickAction";

const quickActions = [
  {
    title: "Getting Started",
    description: "Learn how to use the portal and get set up quickly.",
    icon: <SvgIcon component={FileDocumentOutline} inheritViewBox />,
    to: "#",
  },
  {
    title: "Payments & Billing",
    description: "Learn about payment methods, processing times, and options.",
    icon: <SvgIcon component={CashMultiple} inheritViewBox />,
    to: "#",
  },
  {
    title: "Account Management",
    description: "Manage your profile, settings, and account preferences.",
    icon: <SvgIcon component={AccountOutline} inheritViewBox />,
    to: "#",
  },
];

export function SupportQuickActions() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={2}
      width="100%"
    >
      {quickActions.map((action) => (
        <QuickAction key={action.title} {...action} variant="left-aligned" />
      ))}
    </Stack>
  );
}

