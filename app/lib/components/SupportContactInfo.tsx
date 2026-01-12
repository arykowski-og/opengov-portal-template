import { Box, Link, Stack, SvgIcon, Typography } from "@mui/material";
import { capitalDesignTokens } from "@opengov/capital-mui-theme";
import {
  EmailOpenOutline,
  Phone,
} from "@opengov/react-capital-assets";
import type { ReactElement, ReactNode } from "react";
import { DashboardCardWrapper } from "./DashboardCardWrapper";
import { IconBox } from "./IconBox";

interface SupportInfoProps {
  title: string;
  description: ReactNode;
  icon: ReactElement;
}

function SupportInfo({ title, description, icon }: SupportInfoProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      gap={2}
      width="100%"
    >
      <IconBox icon={icon} variant="square" />
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Typography variant="h4">{title}</Typography>
        <Typography
          variant="bodyDefault"
          color={capitalDesignTokens.semanticColors.foreground.secondary}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

interface SupportContactInfoProps {
  phoneNumber?: string | null;
  emailAddress?: string | null;
}

export function SupportContactInfo({
  phoneNumber = "(555) 123-4567",
  emailAddress = "support@example.gov",
}: SupportContactInfoProps) {
  return (
    <>
      <Typography variant="h3">Get Support</Typography>
      <DashboardCardWrapper sx={{ p: 3 }}>
        {!phoneNumber && !emailAddress ? (
          <Typography variant="bodyDefault">
            No support contact info available
          </Typography>
        ) : (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="flex-start"
            spacing={4}
            width="100%"
          >
            {emailAddress && (
              <SupportInfo
                title="Email Support"
                description={
                  <>
                    Email us anytime at{" "}
                    <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
                  </>
                }
                icon={<SvgIcon component={EmailOpenOutline} inheritViewBox />}
              />
            )}
            {phoneNumber && (
              <SupportInfo
                title="Phone Support"
                description={
                  <>Call us from 9am - 4pm Mon - Fri: {phoneNumber}</>
                }
                icon={<SvgIcon component={Phone} inheritViewBox />}
              />
            )}
          </Stack>
        )}
      </DashboardCardWrapper>
    </>
  );
}

