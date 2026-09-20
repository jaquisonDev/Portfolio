export interface SlideData {
  id: number;
  slug: string;
  navTitle: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  features: string[];
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
  iconName?: string;
}
