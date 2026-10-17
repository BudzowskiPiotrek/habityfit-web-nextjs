import { Theme } from "../types/theme.types";

export const THEME_STORAGE_KEY = "sp_theme";

const VALID: Theme[] = ["light", "dark", "system"];

export const themeStorage = {
  save(theme: Theme) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {}
  },
  load(): Theme {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

      return saved && VALID.includes(saved) ? saved : "system";
    } catch {
      return "system";
    }
  },
  clear() {
    try {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } catch {}
  },
};
