"use client";
import { ReactNode, useEffect } from "react";
import { useAuthState } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export function RequireAuth({ children }: { children: ReactNode }) {
  const { status } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
  }, [status, router]);

  if (status !== "authenticated") return null;
  return <>{children}</>;
}
