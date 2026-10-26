"use client";

import Link from "next/link";
import { SidebarItem } from "../types/sidebar.types";
import { usePathname } from "next/navigation";

export function SidebarLink({
  label,
  icon,
  href,
  enabled = true,
}: SidebarItem) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  const state = !enabled
    ? "pointer-events-none opacity-40"
    : active
      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
      : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800";

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      aria-disabled={!enabled}
      tabIndex={enabled ? undefined : -1}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${state}`}
    >
      <span className="text-lg leading-none">{icon}</span>
      <span className="truncate">{label}</span>
    </Link>
  );
}
