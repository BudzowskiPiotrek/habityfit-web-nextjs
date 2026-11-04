import { RequireGuest } from "@/features/auth/components/RequireGuest";
import { Sidebar } from "@/shared/sidebar";
import { ReactNode } from "react";
import { publicNavigation } from "./navigation/public";

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <RequireGuest>
      <div className="flex min-h-screen">
        <Sidebar items={publicNavigation} />
        <div className="flex-1">{children}</div>
      </div>
    </RequireGuest>
  );
}
