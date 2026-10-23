import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps extends ComponentProps<"button"> {
  loading?: boolean;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300",
  secondary:
    "border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800",
  danger: "bg-red-600 text-white hover:bg-red-500",
};

export function Button({
  variant = "primary",
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 
        text-sm font-medium transition
        disabled:cursor-not-allowed disabled:opacity-60
            ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? "Cargando" : children}
    </button>
  );
}
