import { ReactNode } from "react";

export interface SidebarItem {
  label: string;
  icon: ReactNode;
  href: string;
  enabled?: boolean;
}
