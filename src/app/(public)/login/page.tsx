import { LoginForm } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
