import type { EmploymentType } from "../types/cv.types";

const MONTHS = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export function formatCvDate(value: string): string {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return `${MONTHS[month - 1] ?? ""} ${year}`.trim();
}

export function formatDateRange(
  startDate: string,
  endDate: string | undefined,
  inCurrentRole: boolean,
): string {
  const end = inCurrentRole || !endDate ? "Actualidad" : formatCvDate(endDate);
  return `${formatCvDate(startDate)} - ${end}`;
}

export const employmentTypeLabels: Record<EmploymentType, string> = {
  "full-time": "Jornada completa",
  "part-time": "Media jornada",
  contract: "Contrato",
  freelance: "Freelance",
  internship: "Prácticas",
};
