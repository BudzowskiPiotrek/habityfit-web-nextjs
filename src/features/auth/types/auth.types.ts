export interface User {
  id: string;
  email: string;
  fullName: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export interface AuthState {
  user: User | null;
  token: string | null;
  status: AuthStatus;
}

export interface AuthActions {
  login: (credential: Credentials) => Promise<void>;
  logout: () => void;
}
