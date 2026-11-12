import type { Metadata } from "next";
import { CvView } from "@/features/cv";
import { cvMock } from "@/features/cv/data/cv.mock";

export const metadata: Metadata = {
  title: "CV & Experiencia",
  description:
    "Trayectoria profesional, cvs y recomendación de desarrollo de software.",
};

export default function CvPage() {
  return <CvView content={cvMock} />;
}
