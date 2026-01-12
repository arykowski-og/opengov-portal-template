import { Box, Button, Chip, Divider, SvgIcon, Typography } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";
import { CheckCircle, MapMaker } from "@opengov/react-capital-assets";
import { Link } from "react-router";
import { DashboardCardWrapper } from "~/lib/components/DashboardCardWrapper";

export interface AccountStatusCardProps {
  accountNumber?: string;
  address?: string;
  status?: "active" | "pending" | "inactive";
}

export function AccountStatusCard({
  accountNumber = "12345678",
  address = "123 Main Street, City, ST 12345",
  status = "active",
}: AccountStatusCardProps) {
  const statusConfig = {
    active: {
      label: "Active",
      color: capitalDesignTokens.semanticColors.foreground.successSmall,
      bgColor: capitalDesignTokens.semanticColors.background.successLight,
    },
    pending: {
      label: "Pending",
      color: capitalDesignTokens.semanticColors.foreground.warningSmall,
      bgColor: capitalDesignTokens.semanticColors.background.warningLight,
    },
    inactive: {
      label: "Inactive",
      color: capitalDesignTokens.semanticColors.foreground.secondary,
      bgColor: capitalDesignTokens.semanticColors.background.secondary,
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <DashboardCardWrapper gap={1} width="100%">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Account Status</Typography>
        <Chip
          label={currentStatus.label}
          icon={
            status === "active" ? (
              <SvgIcon
                component={CheckCircle}
                inheritViewBox
                sx={{ color: `${currentStatus.color} !important` }}
              />
            ) : undefined
          }
          sx={{
            bgcolor: currentStatus.bgColor,
            color: currentStatus.color,
            fontWeight: 600,
          }}
        />
      </Box>
      <Box>
        <Typography variant="d6">{`Account #${accountNumber}`}</Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <SvgIcon
            component={MapMaker}
            inheritViewBox
            sx={{
              color: capitalDesignTokens.semanticColors.foreground.secondary,
              fontSize: 20,
            }}
          />
          <Typography variant="bodyDefault">{address}</Typography>
        </Box>
      </Box>
      <Divider />
      <Button
        component={Link}
        sx={{ alignSelf: "flex-start" }}
        to="/account"
      >
        Manage Account
      </Button>
    </DashboardCardWrapper>
  );
}

