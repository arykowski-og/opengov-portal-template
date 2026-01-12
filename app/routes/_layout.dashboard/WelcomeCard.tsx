import { Box, Button, Divider, Typography } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";
import { Link } from "react-router";
import { DashboardCardWrapper } from "~/lib/components/DashboardCardWrapper";

export interface WelcomeCardProps {
  userName?: string;
}

export function WelcomeCard({ userName = "User" }: WelcomeCardProps) {
  return (
    <DashboardCardWrapper sx={{ justifyContent: "space-between" }}>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h3">Welcome Back</Typography>
        <Typography variant="d6">{userName}</Typography>
        <Typography
          variant="bodyDefault"
          color={capitalDesignTokens.semanticColors.foreground.secondary}
        >
          Access your services and manage your account
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <Divider />
        <Button component={Link} variant="contained" to="#">
          New Request
        </Button>
      </Box>
    </DashboardCardWrapper>
  );
}

