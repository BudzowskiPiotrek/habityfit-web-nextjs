import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps extends ComponentProps<"button"> {
  loading?: boolean;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "",
  secondary: "",
  danger: "",
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
      className={`
            ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? "Cargando" : children}
    </button>
  );
}
