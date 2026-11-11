"use client";
import { useAuth } from "@/features/auth";
import { Button } from "@/shared/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Perfil.",
};

export default function ProfilePage() {
  const { user, logout } = useAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <p>Hola, {user?.fullName}</p>
      <Button variant="secondary" onClick={logout}>
        Salir
      </Button>
    </main>
  );
}
