import { LoadingState } from "@/shared/components/LoadingState";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV & Experiencia",
  description:
    "Trayectoria profesional, cvs y recomendación de desarrollo de software.",
};

export default function CvPage() {
  return <LoadingState />;
}
