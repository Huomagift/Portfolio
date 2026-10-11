export type ProjectLinkType = 'Live' | 'GitHub' | 'Pitch';

export interface ProjectLink {
  type: ProjectLinkType;
  url: string | null;
  label?: string;
}

export interface Project {
  id: string;
  number: string;
  slug: string;
  title: string;
  oneLiner: string;
  problem: string;
  whatIBuilt: string;
  role?: string;
  stack?: string[];
  keyDecisions?: string[];
  status: string;
  badges?: string[];
  achievement?: string;
  links: ProjectLink[];
  featured?: boolean;
  image: string;
  imageAlt: string;
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Instagram' | 'WhatsApp';
  url: string | null;
  username?: string;
  active: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  context: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}
