export type EducationEntry = {
  id: string;
  year: string;
  institution: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
};

export const educationEntries: EducationEntry[] = [
  {
    id: "university",
    year: "2022 – 2026",
    institution: "University of Gondar",
    title: "Bachelor of Computer Science",
    description:
      "I am a Computer Science graduate from the University of Gondar, where I built a strong foundation in software engineering, algorithms, database systems, and artificial intelligence. During my studies, I focused on practical software development and real-world problem-solving using modern technologies.",
    highlights: [
      "Software Engineering & Architecture",
      "Data Structures & Algorithms",
      "Database Systems (SQL & NoSQL)",
      "Artificial Intelligence Fundamentals",
      "Web Development & Full Stack Systems",
    ],
    icon: "graduation-cap",
  },
  {
    id: "secondary",
    year: "2016 – 2022",
    institution: "Shinta Secondary & Preparatory School",
    title: "Secondary & Preparatory Education",
    description:
      "I completed my secondary and preparatory education at Shinta Secondary and Preparatory School. During this time, I developed strong analytical thinking, mathematics skills, and problem-solving abilities that later supported my journey into computer science.",
    highlights: [
      "Strong Mathematics Foundation",
      "Analytical & Problem-Solving Skills",
      "Science & Technology Focus",
      "Leadership & Teamwork Experience",
    ],
    icon: "book",
  },
  {
    id: "self-learning",
    year: "2021 – Present",
    institution: "Self-Taught Development",
    title: "Continuous Learning & Real-World Projects",
    description:
      "Alongside formal education, I have continuously developed my skills as a self-taught software developer. I actively work on real-world projects and explore modern technologies in web development and AI systems.",
    highlights: [
      "React.js & Next.js",
      "Node.js & Express.js",
      "Full Stack Web Development",
      "UI/UX Design Principles",
      "AI System Integration Concepts",
    ],
    icon: "zap",
  },
];
