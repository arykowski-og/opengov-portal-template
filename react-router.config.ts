import type { Config } from "@react-router/dev/config";

export default {
  // SSR disabled - OpenGov components use browser-only APIs (navigator, etc.)
  ssr: false,
} satisfies Config;

