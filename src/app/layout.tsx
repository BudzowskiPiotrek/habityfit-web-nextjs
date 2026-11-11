import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/providers/AppProviders";
import { themeScript } from "@/shared/theme/lib/themeScript";

export const metadata: Metadata = {
  title: "HabityFit",
  description:
    "Portfolio de desarrollo de software y dashboard de entrenamiento HabityFit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
