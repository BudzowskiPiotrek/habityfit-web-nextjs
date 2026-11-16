import { CvView } from "@/features/cv";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV & Experiencia",
  description: "Trayectoria profesional, cvs y contacto.",
};

export default function CvPage() {
  return <CvView />;
}
