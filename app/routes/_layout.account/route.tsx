import { Box, Button, Divider, Stack, SvgIcon, Typography } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";
import {
  AccountOutline,
  Bell,
  Lock,
} from "@opengov/react-capital-assets";
import { Header } from "~/lib/components/Header";
import { PageContentWrapper } from "~/lib/components/PageContentWrapper";
import { DashboardCardWrapper } from "~/lib/components/DashboardCardWrapper";
import { IconBox } from "~/lib/components/IconBox";
import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Account - OpenGov Portal" }];
}

interface AccountSectionProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  buttonText: string;
  to: string;
}

function AccountSection({
  icon,
  title,
  description,
  buttonText,
}: AccountSectionProps) {
  return (
    <DashboardCardWrapper>
      <Box display="flex" alignItems="flex-start" gap={2}>
        <IconBox icon={icon} variant="square" />
        <Box flex={1}>
          <Typography variant="h4">{title}</Typography>
          <Typography
            variant="bodyDefault"
            color={capitalDesignTokens.semanticColors.foreground.secondary}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Button sx={{ alignSelf: "flex-start" }}>{buttonText}</Button>
    </DashboardCardWrapper>
  );
}

export default function Account() {
  const sections = [
    {
      icon: <SvgIcon component={AccountOutline} inheritViewBox />,
      title: "Personal Information",
      description:
        "Update your name, email address, phone number, and other personal details.",
      buttonText: "Edit Profile",
      to: "/account/profile",
    },
    {
      icon: <SvgIcon component={Lock} inheritViewBox />,
      title: "Security Settings",
      description:
        "Manage your password, two-factor authentication, and security preferences.",
      buttonText: "Manage Security",
      to: "/account/security",
    },
    {
      icon: <SvgIcon component={Bell} inheritViewBox />,
      title: "Notification Preferences",
      description:
        "Choose how you want to receive updates about your requests and account activity.",
      buttonText: "Manage Notifications",
      to: "/account/notifications",
    },
  ];

  return (
    <>
      <Header
        title="Account Management"
        subtitle="Manage your personal details, notification settings, and preferences."
      />
      <PageContentWrapper>
        <Box display="flex" flexDirection="column" gap={3} mx="auto" maxWidth="md">
          <Stack spacing={3} width="100%">
            {sections.map((section) => (
              <AccountSection key={section.title} {...section} />
            ))}
          </Stack>
        </Box>
      </PageContentWrapper>
    </>
  );
}
