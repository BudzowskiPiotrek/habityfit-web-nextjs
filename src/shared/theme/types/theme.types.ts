export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
}

export interface ThemeActions {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
