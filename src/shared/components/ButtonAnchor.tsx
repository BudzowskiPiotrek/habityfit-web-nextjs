import { ComponentProps } from "react";
import { ButtonVariant, buttonClassName } from "./button.styles";

interface ButtonAnchorProps extends ComponentProps<"a"> {
  variant?: ButtonVariant;
}

export function ButtonAnchor({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonAnchorProps) {
  return (
    <a className={buttonClassName(variant, className)} {...props}>
      {children}
    </a>
  );
}
