"use client";

import { FormEvent, useState } from "react";
import { useAuthActions } from "./useAuth";
import { validationEmail, validationPassword } from "@/shared/lib/validation";
import { mapLoginError } from "@/shared/lib/error";

export function useLoginForm() {
  const { login } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [submitError, setSubmitError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const onEmailChange = (value: string) => {
    setEmail(value);
    setSubmitError(undefined);
    setEmailError(value ? validationEmail(value) : undefined);
  };

  const onPasswordChange = (value: string) => {
    setPassword(value);
    setSubmitError(undefined);
    setPasswordError(undefined);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const eErr = validationEmail(email);
    const pErr = validationPassword(password);

    setEmailError(eErr);
    setPasswordError(pErr);
    if (eErr || pErr) return;

    setLoading(true);
    setSubmitError(undefined);
    try {
      await login({
        email: email.trim().toLocaleLowerCase(),
        password,
      });
    } catch (err) {
      setSubmitError(mapLoginError(err));
    } finally {
      setLoading(false);
    }
  };
  return {
    email,
    password,
    emailError,
    passwordError,
    submitError,
    loading,
    onEmailChange,
    onPasswordChange,
    onSubmit,
  };
}
