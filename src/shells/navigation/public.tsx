import { SidebarItem } from "@/shared/sidebar";

export const publicNavigation: SidebarItem[] = [
  {
    label: "Iniciar sesión",
    icon: "",
    href: "/login",
  },
  {
    label: "Cómo se creo esta Web",
    icon: "",
    href: "/videos",
    enabled: false,
  },
  {
    label: "Git y repositorios",
    icon: "",
    href: "/git",
    enabled: false,
  },
  {
    label: "Sobre HabityFit App",
    icon: "",
    href: "/habityfit",
    enabled: false,
  },
  {
    label: "CV & Experiencia",
    icon: "",
    href: "/cv",
  },
  {
    label: "Sobre mí",
    icon: "",
    href: "/about",
    enabled: false,
  },
  {
    label: "Contacto",
    icon: "",
    href: "/contact",
    enabled: false,
  },
];
