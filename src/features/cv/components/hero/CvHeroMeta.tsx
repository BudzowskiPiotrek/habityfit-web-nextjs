import type { CvProfile } from "../../types/cv.types";

export function CvHeroMeta({ profile }: { profile: CvProfile }) {
  const links = [
    profile.links.github
      ? { label: "GitHub", href: profile.links.github }
      : null,
    profile.links.linkedin
      ? { label: "LinkedIn", href: profile.links.linkedin }
      : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <aside className="flex w-full flex-col gap-5 rounded-2xl border border-zinc-200 bg-white/60 p-5 text-sm dark:border-zinc-800 dark:bg-zinc-900/40 lg:max-w-sm">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          Ubicación
        </span>
        <span className="text-zinc-700 dark:text-zinc-300">
          {profile.location}
        </span>
      </div>

      {profile.availability && (
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            Disponibilidad
          </span>
          <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            {profile.availability}
          </span>
        </div>
      )}

      {links.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            Enlaces
          </span>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
