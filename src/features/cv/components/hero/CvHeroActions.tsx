import { ButtonAnchor } from "@/shared/components";
import type { CvProfile } from "../../types/cv.types";

export function CvHeroActions({ profile }: { profile: CvProfile }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <ButtonAnchor href={profile.links.cvEs} download variant="secondary">
        Descargar CV-ES
      </ButtonAnchor>
      <ButtonAnchor href={profile.links.cvEn} download variant="secondary">
        Descargar CV-EN
      </ButtonAnchor>
      <ButtonAnchor href={`mailto:${profile.email}`}>Contactar</ButtonAnchor>
    </div>
  );
}
