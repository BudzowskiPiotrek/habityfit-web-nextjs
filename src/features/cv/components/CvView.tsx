import { CvContent } from "../types/cv.types";
import { CvExperienceCard } from "./experience/CvExperienceCard";
import { CvHero } from "./hero/CvHero";

export function CvView({ content }: { content: CvContent }) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:gap-14 sm:py-14 lg:px-8 2xl:max-w-7xl">
      <CvHero profile={content.profile} />

      {content.experience.length > 0 && (
        <section
          aria-labelledby="cv-experience-title"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-4">
            {content.experience.map((experience) => (
              <CvExperienceCard
                key={`${experience.id}-${experience.startDate}`}
                experience={experience}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
