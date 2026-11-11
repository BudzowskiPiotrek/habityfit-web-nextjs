import type { Metadata } from "next";
import { CvView } from "@/features/cv";

export const metadata: Metadata = {
  title: "CV & Experiencia",
  description:
    "Trayectoria profesional, métricas de impacto y recomendación de desarrollo de software.",
};

export default function CvPage() {
  return <CvView />;
}
