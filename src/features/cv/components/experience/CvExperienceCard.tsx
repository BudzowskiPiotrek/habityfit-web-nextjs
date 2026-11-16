import type { CvExperience } from "../../types/cv.types";
import { employmentTypeLabels, formatDateRange } from "../../lib/cv.format";

export function CvExperienceCard({ experience }: { experience: CvExperience }) {
  const {
    companyName,
    location,
    employmentType,
    role,
    startDate,
    endDate,
    inCurrentRole,
    shortSummary,
    skills,
  } = experience;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white/60 p-5 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {role}
          </h3>
          {inCurrentRole && (
            <span className="rounded-full border border-emerald-300 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:text-emerald-400">
              Actual
            </span>
          )}
        </div>

        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          <span className="font-medium">{companyName}</span>
          <span aria-hidden="true"> · </span>
          {location}
        </p>

        <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          {formatDateRange(startDate, endDate, inCurrentRole)}
          <span aria-hidden="true"> · </span>
          {employmentTypeLabels[employmentType]}
        </p>
      </div>

      <p className="text-justify text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {shortSummary}
      </p>

      {skills.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
