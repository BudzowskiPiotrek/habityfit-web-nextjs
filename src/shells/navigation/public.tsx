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
    href: "/nextjs",
  },
  {
    label: "Sobre HabityFit App",
    icon: "",
    href: "/habityfit",
    enabled: false,
  },
  {
    label: "Videos sobre .Net",
    icon: "",
    href: "/dotnet",
  },
  {
    label: "Videos sobre Docker",
    icon: "",
    href: "/docker",
  },
  {
    label: "Git y repositorios",
    icon: "",
    href: "/git",
    enabled: false,
  },
  {
    label: "CV & Experiencia",
    icon: "",
    href: "/cv",
  },
];
