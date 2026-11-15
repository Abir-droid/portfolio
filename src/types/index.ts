export type ProjectCategory = 'all' | 'fullstack' | 'python' | 'systems' | 'frontend';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'fullstack' | 'python' | 'systems' | 'frontend';
  categoryLabel: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  architecture?: string;
  learnings?: string;
  badge?: string;
  stats?: {
    stars?: number;
    language?: string;
    status?: string;
  };
}

export interface SkillItem {
  name: string;
  level: 'proficient' | 'exploring';
  icon?: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  period: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  keyLearnings: string[];
  type: 'education' | 'homelab' | 'development' | 'club';
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  label: string;
}
