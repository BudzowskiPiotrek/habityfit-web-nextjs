"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ResolvedTheme,
  Theme,
  ThemeActions,
  ThemeState,
} from "../types/theme.types";
import { themeStorage } from "../lib/storage";
import { applyTheme, getSystemTheme } from "../lib/dom";

export const ThemeStateContext = createContext<ThemeState | null>(null);
export const ThemeActionsContext = createContext<ThemeActions | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(themeStorage.load());
  }, []);
  useEffect(() => {
    const update = () => {
      const rld = theme === "system" ? getSystemTheme() : theme;
      setResolvedTheme(rld);
      applyTheme(rld);
    };
    update();
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    themeStorage.save(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "light" : "dark",
    );
  }, [setTheme]);

  const state = useMemo<ThemeState>(
    () => ({ theme, resolvedTheme }),
    [theme, resolvedTheme],
  );

  const actions = useMemo<ThemeActions>(
    () => ({ setTheme, toggleTheme }),
    [setTheme, toggleTheme],
  );

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeActionsContext.Provider value={actions}>
        {children}
      </ThemeActionsContext.Provider>
    </ThemeStateContext.Provider>
  );
}
