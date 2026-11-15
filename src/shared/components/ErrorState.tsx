import { Button } from "./Button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}

export function ErrorState({
  title,
  onRetry,
  retryLabel = "Reintentar",
  className = "",
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={`mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center ${className}`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Vaya, algo ha fallado
      </p>

      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h1>

      {onRetry && (
        <div>
          <Button onClick={onRetry}>{retryLabel}</Button>
        </div>
      )}
    </div>
  );
}
