export type WorkMode = "remote" | "hybrid" | "onsite";

export interface CvLinks {
  github?: string;
  linkedin?: string;
  cvEs: string;
  cvEn: string;
}

export interface CvProfile {
  fullName: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  availability?: string;
  links: CvLinks;
}

export interface CvExperience {
  id: number;
  companyName: string;
  location: string;
  employmentType: number;
  role: string;
  startDate: string;
  endDate?: string;
  inCurrentRole: boolean;
  shortSummary: string;
  skills: string[];
}

export interface CvContent {
  profile: CvProfile;
  experience: CvExperience[];
}
