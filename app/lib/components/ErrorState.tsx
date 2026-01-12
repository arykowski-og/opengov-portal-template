import { Box, Card, Typography } from "@mui/material";
import type { ReactNode } from "react";

export interface ErrorStateProps {
  title?: string;
  description?: ReactNode;
  children?: ReactNode;
}

export function ErrorState({
  title = "An unexpected error occurred.",
  description = "We apologize for the inconvenience. Please try again later.",
  children,
}: ErrorStateProps) {
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          margin: "5vh auto",
          maxWidth: "400px",
          p: 4,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            bgcolor: "error.light",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Typography variant="h1" color="error.main">
            !
          </Typography>
        </Box>
        <Typography variant="h2" mt={2}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1} mb={2}>
          {description}
        </Typography>
        {children}
      </Box>
    </Card>
  );
}
