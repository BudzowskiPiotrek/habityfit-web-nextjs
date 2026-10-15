import { http } from "@/shared/lib/http";
import { Credentials, User } from "../types/auth.types";

interface LoginResponseDto {
  result: {
    Token: string;
    User: {
      ID: string;
      EMAIL: string;
      NAME: string;
    };
  };
}

export async function loginRequest(
  credential: Credentials,
): Promise<{ token: string; user: User }> {
  const data = await http<LoginResponseDto>("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      Email: credential.email,
      Password: credential.password,
    }),
  });

  if (!data.result) throw new Error("Credenciales inválidas");

  return {
    token: data.result.Token,
    user: {
      id: data.result.User.ID,
      email: data.result.User.EMAIL,
      fullName: data.result.User.NAME,
    },
  };
}
