"use client";

import { useThemeActions } from "../hooks/useTheme";

export function ThemeToggle() {
  const { toggleTheme } = useThemeActions();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-700"
    >
      <span className="dark:hidden">Oscuro</span>
      <span className="hidden dark:inline">Claro</span>
    </button>
  );
}
