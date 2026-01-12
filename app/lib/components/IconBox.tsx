import { Box } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";
import type { ReactElement } from "react";

interface IconBoxProps {
  icon: ReactElement;
  variant?: "square" | "circle";
  size?: number;
  iconColor?: string;
}

export function IconBox({ icon, variant = "square", size = 48, iconColor }: IconBoxProps) {
  return (
    <Box
      sx={{
        borderRadius: variant === "square" ? "10%" : "50%",
        bgcolor: capitalDesignTokens.semanticColors.background.tertiary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        minWidth: size,
        flexShrink: 0,
      }}
      className="icon-hover-background-color"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: iconColor ?? capitalDesignTokens.semanticColors.foreground.secondary,
        }}
        className="icon-hover-fill-color"
      >
        {icon}
      </Box>
    </Box>
  );
}

