export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  label: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "DEVELOPMENT",
    description:
      "Custom websites, web applications, and platforms built for performance and scalability.",
    label: "PERFORMANCE WEB",
  },
  {
    id: "saas-solutions",
    number: "02",
    title: "SAAS",
    description:
      "End-to-end SaaS product development from MVP to market-ready platforms.",
    label: "PRODUCT SYSTEMS",
  },
  {
    id: "automation",
    number: "03",
    title: "AUTOMATION",
    description:
      "Workflow automation, integrations, and intelligent process optimization.",
    label: "OPERATIONS LOGIC",
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI/UX DESIGN",
    description:
      "User-centered interfaces that balance aesthetics with functional precision.",
    label: "INTERFACE DIRECTION",
  },
  {
    id: "ai-integration",
    number: "05",
    title: "AI INTEGRATION",
    description:
      "Intelligent AI-powered features, LLM integrations, and machine learning solutions.",
    label: "INTELLIGENT FLOWS",
  },
  {
    id: "system-architecture",
    number: "06",
    title: "SYSTEM ARCHITECTURE",
    description:
      "Scalable, resilient system design built for growth and performance.",
    label: "SCALABLE CORE",
  },
];

export const techStack: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
];
