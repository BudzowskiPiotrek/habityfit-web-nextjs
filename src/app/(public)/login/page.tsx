import { LoginForm } from "@/features/auth";
import { ThemeToggle } from "@/shared/theme/components/ThemeToggle";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <ThemeToggle />
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
