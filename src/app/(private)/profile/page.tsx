"use client";
import { useAuth } from "@/features/auth";
import { Button } from "@/shared/components";
import { ThemeToggle } from "@/shared/theme/components/ThemeToggle";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <ThemeToggle />
      <p>Hola, {user?.fullName}</p>
      <Button variant="secondary" onClick={logout}>
        Salir
      </Button>
    </main>
  );
}
