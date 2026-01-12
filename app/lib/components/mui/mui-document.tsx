import { CssBaseline } from "@mui/material";
import type { PropsWithChildren } from "react";
import { MuiProvider } from "./mui-provider.js";

export function MuiDocument({ children }: PropsWithChildren) {
  return (
    <MuiProvider>
      <CssBaseline />
      {children}
    </MuiProvider>
  );
}

