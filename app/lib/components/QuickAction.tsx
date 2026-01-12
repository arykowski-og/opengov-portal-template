import { Box, Button, Typography } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";
import type { ReactElement } from "react";
import { Link } from "react-router";
import { IconBox } from "./IconBox";

type QuickActionVariant = "centered" | "left-aligned";

interface QuickActionProps {
  title: string;
  description: string;
  icon: ReactElement;
  to: string;
  variant?: QuickActionVariant;
}

export function QuickAction({
  title,
  description,
  icon,
  to,
  variant = "centered",
}: QuickActionProps) {
  const isLeftAligned = variant === "left-aligned";

  return (
    <Button
      to={to}
      component={Link}
      sx={{
        p: 3,
        width: "100%",
        bgcolor: capitalDesignTokens.semanticColors.background.primary,
        borderColor: capitalDesignTokens.semanticColors.border.secondary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        "& .MuiTypography-root": {
          textAlign: isLeftAligned ? "start" : "center",
        },
        "&:hover": {
          bgcolor: capitalDesignTokens.semanticColors.background.primary,
          borderColor: capitalDesignTokens.componentColors.primaryIdle,
          "& .icon-hover-background-color": {
            backgroundColor: capitalDesignTokens.componentColors.primaryIdle,
          },
          "& .icon-hover-fill-color": {
            color: capitalDesignTokens.semanticColors.background.primary,
          },
        },
      }}
    >
      <Box
        display="flex"
        flexDirection={isLeftAligned ? "row" : "column"}
        alignItems="center"
        alignSelf={isLeftAligned ? "flex-start" : "center"}
        gap={isLeftAligned ? 2 : 1}
      >
        <IconBox icon={icon} variant={isLeftAligned ? "square" : "circle"} />
        <Typography
          variant={isLeftAligned ? "h3" : "h4"}
          color={capitalDesignTokens.semanticColors.foreground.primary}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        variant="bodyDefault"
        color={capitalDesignTokens.semanticColors.foreground.secondary}
        {...(isLeftAligned && { alignSelf: "flex-start" })}
      >
        {description}
      </Typography>
    </Button>
  );
}
