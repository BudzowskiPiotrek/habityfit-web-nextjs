import type { SidebarItem } from "@/shared/sidebar";

export const privateNavigation: SidebarItem[] = [
  { label: "Perfil", icon: "👤", href: "/profile" },
  { label: "Ejercicios", icon: "💪", href: "/exercises", enabled: false },
  { label: "Feed", icon: "📰", href: "/feed", enabled: false },
  { label: "Amigos", icon: "👥", href: "/friends", enabled: false },
  { label: "Mediciones", icon: "📏", href: "/measurements", enabled: false },
  { label: "Rutinas", icon: "🏋️", href: "/routines", enabled: false },
  { label: "Entreno", icon: "📈", href: "/workouts", enabled: false },
];
