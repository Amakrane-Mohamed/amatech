"use client";

import type { ReactNode } from "react";

import { SmoothScroll } from "./smooth-scroll";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
