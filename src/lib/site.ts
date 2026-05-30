import { colors } from "./colors";
import { fontFamily } from "./typography";

export const siteConfig = {
  name: "AMATECH",
  description: "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  fontFamily,
  colors,
} as const;
