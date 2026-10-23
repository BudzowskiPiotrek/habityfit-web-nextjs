import { useState } from "react";
import { Field, FieldProps } from "./Field";

export function PasswordField(props: Omit<FieldProps, "type" | "trailing">) {
  const [visible, setVisible] = useState(false);

  return (
    <Field
      {...props}
      type={visible ? "text" : "password"}
      trailing={
        <button
          type="button"
          className="px-2 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? "Ocultar" : "Mostrar"}
        </button>
      }
    />
  );
}
