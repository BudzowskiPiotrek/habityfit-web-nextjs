"use client";

import { useAuthState } from "@/features/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const { status } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
  }, [router, status]);

  if (status !== "authenticated") return null;
  return <>{children}</>;
}
