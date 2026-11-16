import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/providers/AppProviders";
import { themeScript } from "@/shared/theme/lib/themeScript";

export const metadata: Metadata = {
  title: "Piotrek · piobudev · Desarrollador .NET | Portfolio & HabityFit",
  description:
    "Desarrollador .NET en Málaga. Portfolio, diario de desarrollo en vídeo y HabityFit, mi app de entrenamiento.",
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
