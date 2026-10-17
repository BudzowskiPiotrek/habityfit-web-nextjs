"use client";

import { AuthProvider } from "@/features/auth";
import { ThemeProvider } from "@/shared/theme/context/ThemeContext";
import { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
