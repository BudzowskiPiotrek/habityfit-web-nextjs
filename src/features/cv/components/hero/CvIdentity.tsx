import type { CvProfile } from "../../types/cv.types";

export function CvIdentity({ profile }: { profile: CvProfile }) {
  return (
    <div className="flex max-w-4xl flex-col gap-5">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Cv & Experiencia
      </p>

      <div className="flex flex-col gap-3">
        <h1
          id="cv-hero-title"
          className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl"
        >
          {profile.fullName}
        </h1>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          {profile.role}
        </p>
      </div>

      <p className="text-justify max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.summary}
      </p>
    </div>
  );
}
