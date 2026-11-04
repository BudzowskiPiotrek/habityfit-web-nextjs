import { SidebarItem } from "@/shared/sidebar";

export const publicNavigation: SidebarItem[] = [
  { label: "Inicio", icon: "🏠", href: "/home", enabled: false },
  { label: "Sobre mí", icon: "👤", href: "/about", enabled: false },
  { label: "HabityFit App", icon: "⚡", href: "/habityfit", enabled: false },
  { label: "Proyectos", icon: "📦", href: "/projects", enabled: false },
  { label: "Vídeos & Serie", icon: "🎬", href: "/videos", enabled: false },
  { label: "CV & Experiencia", icon: "📄", href: "/cv", enabled: false },
  { label: "Tech Stack", icon: "💻", href: "/tech-stack", enabled: false },
  { label: "Novedades", icon: "🚀", href: "/changelog", enabled: false },
  { label: "Contacto", icon: "✉️", href: "/contact", enabled: false },
  { label: "Iniciar sesión", icon: "🔑", href: "/login" },
];
