export interface Project {
  id: number;
  title: string;
  description?: string;
  image?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}