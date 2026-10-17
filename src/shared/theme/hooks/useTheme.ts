"use client";

import { useContext } from "react";
import {
  ThemeActionsContext,
  ThemeStateContext,
} from "../context/ThemeContext";

export function useThemeState() {
  const ctx = useContext(ThemeStateContext);
  if (!ctx)
    throw new Error("useThemeState debe usarse dentro de <ThemeProvider>");
  return ctx;
}
export function useThemeActions() {
  const ctx = useContext(ThemeActionsContext);
  if (!ctx)
    throw new Error("useThemeActions debe usarse dentro de <ThemeProvider>");
  return ctx;
}

export function useTheme() {
  return { ...useThemeState(), ...useThemeActions() };
}
