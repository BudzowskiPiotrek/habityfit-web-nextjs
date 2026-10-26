import { SidebarItem } from "../types/sidebar.types";
import { SidebarLink } from "./SidebarLink";

export function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <aside className="sticky top-0 h-screen w-1/6 min-w-40 shrink-0 border-r border-zinc-300 p-3 dark:border-zinc-800">
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <SidebarLink key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}
