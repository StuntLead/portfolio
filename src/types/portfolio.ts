export type Profile = {
  name: string;
  headline: string;
  bio: string;
  email: string | null;
  linkedin: string | null;
  github: string | null;
  location: string | null;
  availability: string | null;
  resumeUrl: string | null;
};

export type TeamMember = {
  name: string;
  role: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type ProjectCategory = "software" | "ai" | "research" | "product";

export type ProjectLink = {
  label: string;
  url: string;
  type: "live" | "github" | "huggingface" | "paper" | "external";
};

export type ProjectMedia = {
  type: "image" | "video" | "embed";
  src: string;
  alt?: string;
  poster?: string;
  title?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  category: ProjectCategory;
  status?: string;
  featured: boolean;
  featuredLevel?: "primary" | "secondary";
  description: string;
  problem?: string;
  solution?: string;
  contribution?: string;
  role?: string;
  team?: TeamMember[];
  technologies: string[];
  skills?: string[];
  metrics?: Metric[];
  
  // New Media and Link Data Models
  thumbnail?: string;
  media?: ProjectMedia[];
  links?: ProjectLink[];
};

export type Publication = {
  title: string;
  authors: string[];
  publisher: string;
  venue: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  url?: string;
  methodology?: string[];
};

export type Experience = {
  company: string;
  role: string;
  team?: string;
  location?: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  highlights: string[];
  technologies?: string[];
};

export type Education = {
  degree: string;
  university: string;
  specialization?: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};
