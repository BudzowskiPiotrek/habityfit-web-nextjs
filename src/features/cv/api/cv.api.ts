import { http } from "@/shared/lib/http";
import { ApiResponseDto } from "@/shared/types/api.types";
import { CvContent } from "../types/cv.types";

interface CvLinksDto {
  github?: string | null;
  linkedin?: string | null;
  cvEs: string;
  cvEn: string;
}

interface CvProfileDto {
  fullName: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  availability?: string | null;
  links: CvLinksDto;
}

interface CvExperienceDto {
  id: number;
  companyName: string;
  location: string;
  employmentType: number;
  role: string;
  startDate: string;
  endDate?: string | null;
  inCurrentRole: boolean;
  shortSummary: string;
  skills: string[];
}

interface CvContentDto {
  profile: CvProfileDto;
  experience: CvExperienceDto[];
}

export async function getCvContent(): Promise<CvContent> {
  const response = await http<ApiResponseDto<CvContentDto>>("/api/page/cv", {
    cache: "no-store",
  });

  if (response.withError || !response.result) {
    throw new Error(response.message || "No se pudo cargar el CV");
  }

  const { profile, experience } = response.result;

  return {
    profile: {
      fullName: profile.fullName,
      role: profile.role,
      summary: profile.summary,
      location: profile.location,
      email: profile.email,
      availability: profile.availability ?? undefined,
      links: {
        github: profile.links.github ?? undefined,
        linkedin: profile.links.linkedin ?? undefined,
        cvEs: profile.links.cvEs,
        cvEn: profile.links.cvEn,
      },
    },
    experience: experience.map((item) => ({
      id: item.id,
      companyName: item.companyName,
      location: item.location,
      employmentType: item.employmentType,
      role: item.role,
      startDate: item.startDate.slice(0, 10),
      endDate: item.endDate ? item.endDate.slice(0, 10) : undefined,
      inCurrentRole: item.inCurrentRole,
      shortSummary: item.shortSummary,
      skills: item.skills,
    })),
  };
}
