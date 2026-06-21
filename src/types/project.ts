export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  features: string[];
  github?: string | string[];
  demo?: string;
  image?: string;
};
