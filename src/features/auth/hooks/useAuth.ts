"use client";

import { useContext } from "react";
import { AuthActionsContext, AuthStateContext } from "../context/AuthContext";

export function useAuthState() {
  const ctx = useContext(AuthStateContext);
  if (!ctx)
    throw new Error("useAuthState debe usarse dentro de <AuthProvider>");
  return ctx;
}
export function useAuthActions() {
  const ctx = useContext(AuthActionsContext);
  if (!ctx)
    throw new Error("useAuthActions debe usarse dentro de <AuthProvider>");
  return ctx;
}

export function useAuth() {
  return { ...useAuthState(), ...useAuthActions() };
}
