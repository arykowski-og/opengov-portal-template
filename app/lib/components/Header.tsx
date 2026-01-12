import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";
import type { ReactNode } from "react";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function Header({ title, subtitle, children }: HeaderProps) {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: capitalDesignTokens.semanticColors.background.primary,
        borderBottom: `1px solid ${capitalDesignTokens.semanticColors.border.secondary}`,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h1">{title}</Typography>
          {subtitle && (
            <Typography color="secondary" sx={{ mt: 0.5 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>
      {children}
    </Box>
  );
}

