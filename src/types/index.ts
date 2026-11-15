export type ProjectCategory = 'all' | 'fullstack' | 'systems' | 'frontend' | 'automation';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  architecture?: string;
  learnings?: string;
  badge?: string;
  deploymentInfo?: string;
}

export interface GitHubRepo {
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  homepage: string | null;
  stars: number;
  forks: number;
  language: string | null;
  updatedAt: string;
  createdAt: string;
  topics: string[];
}

export interface GitHubData {
  username: string;
  avatarUrl: string;
  bio: string | null;
  publicRepos: number;
  ownReposCount: number;
  totalStars: number;
  totalForks: number;
  languageBytes: Record<string, number>;
  repos: GitHubRepo[];
  fetchedAt: string;
}

export interface TechItem {
  name: string;
  category: 'programming' | 'web' | 'databases' | 'os' | 'infra' | 'ai';
  status: 'Daily Driver' | 'Active Project' | 'Production Deployed' | 'Lab Tested' | 'Exploring';
  description: string;
  projectsUsedIn: string[];
}

export interface InfrastructureNode {
  id: string;
  label: string;
  sublabel: string;
  layer: 'edge' | 'dns' | 'network' | 'server' | 'orchestration' | 'workload';
  icon: string;
  status: string;
  tech: string;
  description: string;
  spec: string;
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
