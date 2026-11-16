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

export const employmentTypeLabels: Record<number, string> = {
  1: "Jornada completa",
  2: "Media jornada",
  3: "Contrato",
  4: "Prácticas",
  5: "Freelance",
};
