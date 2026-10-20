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
    <div className="">
      <label htmlFor={id} className="">
        {label}
      </label>
      <div className="">
        <input
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={hasMessage ? messageId : undefined}
          className={`
            ${error ? "" : ""}
            ${trailing ? "" : ""}
            ${className}`}
          {...props}
        />
        {trailing && <div className="">{trailing}</div>}
      </div>
      {hasMessage && <p className={`${error ? "" : ""}`}>{error ?? hint}</p>}
    </div>
  );
}
