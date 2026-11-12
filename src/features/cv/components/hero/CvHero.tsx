import type { CvProfile } from "../../types/cv.types";
import { CvHeroActions } from "./CvHeroActions";
import { CvHeroMeta } from "./CvHeroMeta";
import { CvIdentity } from "./CvIdentity";

export function CvHero({ profile }: { profile: CvProfile }) {
  return (
    <section aria-labelledby="cv-hero-title" className="flex flex-col gap-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <CvIdentity profile={profile} />
        <CvHeroMeta profile={profile} />
      </div>
      <CvHeroActions profile={profile} />
    </section>
  );
}
