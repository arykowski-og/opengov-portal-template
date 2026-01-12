import { Box, styled } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";

export const DashboardCardWrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexDirection: "column",
    bgcolor: capitalDesignTokens.semanticColors.background.primary,
    borderColor: capitalDesignTokens.semanticColors.border.secondary,
    border: `1px solid ${capitalDesignTokens.semanticColors.border.secondary}`,
    borderRadius: 1,
    py: 3,
    px: 2,
    gap: 1,
    width: "100%",
  })
);

