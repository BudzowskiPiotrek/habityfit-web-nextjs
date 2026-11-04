import { PrivateShell } from "@/shells";
import { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return <PrivateShell>{children}</PrivateShell>;
}
