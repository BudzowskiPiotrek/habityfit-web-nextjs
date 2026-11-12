import { ButtonLink } from "@/shared/components";
import type { CvProfile } from "../../types/cv.types";

export function CvHeroActions({ profile }: { profile: CvProfile }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <ButtonLink href={profile.links.cvEs} download variant="secondary">
        Descargar CV-Español
      </ButtonLink>
      <ButtonLink href={profile.links.cvEn} download variant="secondary">
        Descargar CV-Ingles
      </ButtonLink>
      <ButtonLink href={`mailto:${profile.email}`}>Contactar</ButtonLink>
    </div>
  );
}
