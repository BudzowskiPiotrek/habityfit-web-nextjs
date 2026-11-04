"use client";
import { ReactNode, useEffect } from "react";
import { useAuthState } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export function RequireGuest({ children }: { children: ReactNode }) {
  const { status } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.replace("/profile");
  }, [status, router]);

  if (status !== "unauthenticated") return null;
  return <>{children}</>;
}
