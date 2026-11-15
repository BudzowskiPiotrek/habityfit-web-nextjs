interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({
  message = "Cargando...",
  className = "",
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-label={message}
      className={`mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-8 text-center ${className}`}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-[6px] border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />

      {message && (
        <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
          {message}
        </p>
      )}
    </div>
  );
}
