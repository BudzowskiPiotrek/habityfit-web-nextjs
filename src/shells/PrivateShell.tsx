import { RequireAuth } from "@/features/auth/components/RequireAuth";
import { Sidebar } from "@/shared/sidebar";
import { ReactNode } from "react";
import { privateNavigation } from "./navigation/private";

export function PrivateShell({ children }: { children: ReactNode }) {
  return (
    <RequireAuth>
      <div className="flex min-h-screen">
        <Sidebar items={privateNavigation} />
        <div className="flex-1">{children}</div>
      </div>
    </RequireAuth>
  );
}
