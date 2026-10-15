import { User } from "@/features/auth/types/auth.types";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export const authStorage = {
  save(token: string, user: User) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  load(): { token: string; user: User } | null {
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
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};
