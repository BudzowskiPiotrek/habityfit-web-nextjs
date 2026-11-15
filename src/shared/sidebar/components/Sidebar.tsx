"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/shared/theme";
import { SidebarItem } from "../types/sidebar.types";
import { SidebarLink } from "./SidebarLink";

export function Sidebar({ items }: { items: SidebarItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="app-sidebar"
        className="fixed left-3 top-3 z-50 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 bg-white/90 text-xl text-zinc-700 shadow-sm backdrop-blur transition hover:bg-zinc-100 md:hidden dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        ☰
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        id="app-sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-64 max-w-[80vw] flex-col border-r border-zinc-300 bg-white p-3 transition-transform duration-200 ease-in-out md:sticky md:top-0 md:h-screen md:w-1/6 md:min-w-40 md:shrink-0 md:translate-x-0 md:bg-transparent dark:border-zinc-800 dark:bg-zinc-900 dark:md:bg-transparent ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
          className="mb-2 self-end rounded-lg p-2 text-lg text-zinc-600 transition hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-1" onClick={() => setOpen(false)}>
          {items.map((item) => (
            <SidebarLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="mt-auto border-t border-zinc-300 pt-3 dark:border-zinc-800">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
