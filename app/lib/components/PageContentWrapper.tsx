import { Box, styled } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";

export const PageContentWrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexDirection: "column",
    gap: 3,
    p: 3,
    backgroundColor: capitalDesignTokens.semanticColors.background.secondary,
    minHeight: "calc(100vh - 120px)",
  })
);

