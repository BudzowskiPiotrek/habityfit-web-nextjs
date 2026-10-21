"use client";

import { Button, Field, PasswordField } from "@/shared/components";
import { useLoginForm } from "../hooks/useLoginForm";

export function LoginForm() {
  const form = useLoginForm();

  return (
    <form onSubmit={form.onSubmit} noValidate className="">
      <Field
        label="Email"
        type="email"
        autoComplete="email"
        value={form.email}
        onChange={(e) => form.onEmailChange(e.target.value)}
        error={form.emailError}
      />

      <PasswordField
        label="Contraseña"
        autoComplete="current-password"
        value={form.password}
        onChange={(e) => form.onPasswordChange(e.target.value)}
        error={form.passwordError}
      />

      {form.submitError && (
        <p role="alert" className="">
          {form.submitError}
        </p>
      )}

      <Button type="submit" loading={form.loading}>
        Entrar
      </Button>
    </form>
  );
}
