"use client";

import { ErrorState, LoadingState } from "@/shared/components";
import { useCv } from "../hooks/useCv";
import { CvExperienceCard } from "./experience/CvExperienceCard";
import { CvHero } from "./hero/CvHero";

export function CvView() {
  const { content, error, loading, reload } = useCv();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:gap-14 sm:py-14 lg:px-8 2xl:max-w-7xl">
      {loading && <LoadingState message="Cargando CV…" />}

      {!loading && error && (
        <div className="flex min-h-[calc(100vh-8rem)] w-full items-center justify-center">
          <ErrorState
            title="No hemos podido conectar con el servidor, inténtalo de nuevo en unos segundos."
            onRetry={reload}
          />
        </div>
      )}

      {!loading && content && (
        <>
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
        </>
      )}
    </main>
  );
}
