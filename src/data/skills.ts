export type SkillCategory = {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    iconName: "code",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend Development",
    iconName: "zap",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT"],
  },
  {
    id: "database",
    title: "Database & Storage",
    iconName: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    id: "languages",
    title: "Programming Languages",
    iconName: "code",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    iconName: "brain",
    skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow", "Predictive Analytics"],
  },
  {
    id: "tools",
    title: "Dev Tools & Platforms",
    iconName: "settings",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Linux"],
  },
];
