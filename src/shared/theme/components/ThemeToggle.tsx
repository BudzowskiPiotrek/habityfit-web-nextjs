"use client";

import { useThemeActions } from "../hooks/useTheme";

export function ThemeToggle() {
  const { toggleTheme } = useThemeActions();

  return (
    <button
      onClick={toggleTheme}
      className="flex w-full items-center gap-3 rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
      <span className="dark:hidden">Oscuro</span>
      <span className="hidden dark:inline">Claro</span>
    </button>
  );
}
