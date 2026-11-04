"use client";
import { useAuthState } from "@/features/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
    if (status === "authenticated") router.replace("/profile");
  }, [router, status]);

  return null;
}
