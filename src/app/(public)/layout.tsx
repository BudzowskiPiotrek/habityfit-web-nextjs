import { PublicShell } from "@/shells";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <PublicShell>{children}</PublicShell>;
}
