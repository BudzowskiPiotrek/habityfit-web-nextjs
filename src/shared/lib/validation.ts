const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export function validationEmail(email: string): string | undefined {
  if (!email.trim()) return "El email es obligatorio";
  if (!EMAIL_REGEX.test(email)) return "Formato de email incorrecto";
}

export function validationPassword(password: string): string | undefined {
  if (!password) return "La contraseña es obligatoria";
}
