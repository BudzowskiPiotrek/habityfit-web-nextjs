import { HttpError } from "./http";

export function mapLoginError(error: unknown): string {
  if (error instanceof HttpError) {
    if (error.status === 401) return "Fallo de credenciales";
    if (error.status === 429) return "Demasiados intentos, espera un minuto";
    return "Servidor no disponible, prueba más tarde";
  }
  if (error instanceof Error && error.message === "Credenciales inválidas") {
    return error.message;
  }
  return "Servidor no disponible, prueba más tarde";
}
