import { Box } from "@mui/material";
import { NavBar, IMenuOption } from "@opengov/components-nav-bar";
import { Outlet, Link as RouteLink, useLocation, useNavigate } from "react-router";
import React, { ComponentProps } from "react";

/**
 * The react-router `Link` component, but it takes `href` instead of `to`. This
 * is useful for interop with libraries and components that work with `href`,
 * such as @opengov/components-nav-bar.
 */
const HrefLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<ComponentProps<typeof RouteLink>, "to"> & { href: string }
>((props, ref) => <RouteLink {...props} ref={ref} to={props.href} />);

HrefLink.displayName = 'HrefLink';

const menuOptions = [
  {
    label: "Dashboard",
    id: "dashboard",
    to: "/dashboard",
    matches: ["/dashboard"],
  },
  {
    label: "Account",
    id: "account",
    to: "/account",
    matches: ["/account"],
  },
  {
    label: "Support",
    id: "support",
    to: "/support",
    matches: ["/support"],
  },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          top: 0,
          position: "sticky",
          width: "100%",
          backgroundColor: "white",
          zIndex: 999,
        }}
      >
        <NavBar
          appName="OpenGov Portal"
          menuOptions={menuOptions.map((option) => ({
            ...option,
            url: option.to,
            linkComponent: HrefLink,
            onClick: () => void navigate(option.to),
            isActive: option.matches.some((match) =>
              location.pathname.startsWith(match)
            ),
          }))}
          utilityTrayOptions={{
            profileSettingsOptions: {
              placeHolderInitials: "U",
              handleSignOut: () => {
                console.log("Sign out clicked");
              },
            },
          }}
          autoDismissToasts
        />
      </Box>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
