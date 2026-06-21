import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "ecohive",
    title: "Echohive - Social Media Platform",
    type: "Full Stack Web Application",
    description:
      "A modern social platform for sharing posts, images, and moods with realtime interaction and community features.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Authentication with JWT",
      "Create / edit / delete posts",
      "Image sharing and media feeds",
      "Likes, comments, and profiles",
      "Real-time chat and search",
    ],
    github: "https://github.com/ashenafi-messle/Echo-hive-",
  },

  {
    id: "digital-queue-system",
    title: "Digital Queue System",
    type: "Desktop Application",
    description:
      "A Java-based queue management system designed to automate customer flow and improve service operations in cafeterias, banks, and offices.",
    tags: ["Java", "Maven", "JavaFX", "PostgreSQL", "JDBC"],
    features: [
      "Queue number generation",
      "Call next customer system",
      "Served / no-show tracking",
      "Admin dashboard",
      "Queue history reports",
    ],
    github: "https://github.com/ashenafi-messle/digital-queue-system",
  },

  {
    id: "digital-campus-dining",
    title: "Digital Campus Dining System",
    type: "Full Stack + AI System",
    description:
      "A large-scale campus dining platform with multiple mobile apps, dashboards, and AI-powered food demand predictions to optimize operations and reduce waste.",
    tags: ["Flutter", "React.js", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Student and staff mobile apps",
      "Director & registrar dashboards",
      "AI meal demand prediction",
      "Attendance and consumption analytics",
      "Multi-platform reporting tools",
    ],
    github: [
      "https://github.com/ashenafi-messle/cafeteria-director-backend",
      "https://github.com/ashenafi-messle/cafeteria-director-frontend",
      "https://github.com/ashenafi-messle/student-and-staff-backend",
      "https://github.com/ashenafi-messle/student-mobile-app",
      "https://github.com/ashenafi-messle/staff_app",
    ],
  },
];
