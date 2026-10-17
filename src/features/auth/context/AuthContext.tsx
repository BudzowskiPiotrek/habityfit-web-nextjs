"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthActions, AuthState, Credentials } from "../types/auth.types";
import { authStorage } from "@/features/auth/lib/storage";
import { loginRequest } from "../api/auth.api";

export const AuthStateContext = createContext<AuthState | null>(null);
export const AuthActionsContext = createContext<AuthActions | null>(null);

const initialState: AuthState = {
  user: null,
  token: null,
  status: "loading",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>(initialState);

  useEffect(() => {
    const saved = authStorage.load();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(
      saved
        ? { user: saved.user, token: saved.token, status: "authenticated" }
        : { user: null, token: null, status: "unauthenticated" },
    );
  }, []);

  const login = useCallback(async (credential: Credentials) => {
    const { token, user } = await loginRequest(credential);
    authStorage.save(token, user);
    setState({ user, token, status: "authenticated" });
  }, []);

  const logout = useCallback(() => {
    authStorage.clear();
    setState({ user: null, token: null, status: "unauthenticated" });
  }, []);

  const actions = useMemo<AuthActions>(
    () => ({ login, logout }),
    [login, logout],
  );

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionsContext.Provider value={actions}>
        {children}
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  );
}
