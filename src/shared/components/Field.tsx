import { ComponentProps, ReactNode, useId } from "react";

export interface FieldProps extends Omit<ComponentProps<"input">, "id"> {
  label: string;
  error?: string;
  hint?: string;
  trailing?: ReactNode;
}

export function Field({
  label,
  trailing,
  error,
  hint,
  className = "",
  ...props
}: FieldProps) {
  const id = useId();
  const messageId = `${id}-msg`;
  const hasMessage = Boolean(error || hint);

  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={hasMessage ? messageId : undefined}
          className={`w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition
            placeholder:text-zinc-400
            focus:ring-2 focus:ring-zinc-900/20
            disabled:cursor-not-allowed disabled:opacity-60
            dark:bg-zinc-900 dark:focus:ring-zinc-100/20
            ${error ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"}
            ${trailing ? "pr-16" : ""}
            ${className}`}
          {...props}
        />
        {trailing && (
          <div className="absolute inset-y-0 right-2 flex items-center">
            {trailing}
          </div>
        )}
      </div>
      {hasMessage && (
        <p className={`text-sm ${error ? "text-red-500" : ""}`}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
