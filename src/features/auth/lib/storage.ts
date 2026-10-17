import { User } from "@/features/auth/types/auth.types";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export const authStorage = {
  save(token: string, user: User) {
    try {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch {}
  },
  load(): { token: string; user: User } | null {
    if (typeof window === "undefined") return null;

    const token = localStorage.getItem(TOKEN_KEY);
    const rawUser = localStorage.getItem(USER_KEY);

    if (!token || !rawUser) return null;

    try {
      return { token, user: JSON.parse(rawUser) as User };
    } catch {
      return null;
    }
  },
  clear() {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } catch {}
  },
};
