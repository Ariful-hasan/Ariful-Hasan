import type Skills from "../components/Skills.astro";

export const SITE_DATA = {
  name: "Ariful Hasan",
  role: "Senior Full-Stack Software Developer",
  location: "Germany",
  email: "arifhasan.mbstu@gmail.com",
  socials: {
    github: "https://github.com/Ariful-Hasan",
    linkedin: "https://linkedin.com/in/arifulhasan1",
  },
  Skills: [
    {
      title: "BACKEND & ARCHITECTURE",
      skills: ["PHP 8.4+", "Laravel/Symfony", "Node.js", "Microservices", "RabbitMQ", "Stripe API"],
      color: "text-blue-400"
    },
    {
      title: "DEVOPS & CLOUD",
      skills: ["Docker/Kubernetes", "AWS (S3/IAM)", "GitLab CI/CD", "Grafana/Prometheus", "Nginx", "HashiCorp Vault"],
      color: "text-blue-400"
    },
    {
      title: "DATABASE & CACHING",
      skills: ["MySQL", "MongoDB", "Redis", "Elasticsearch", "MinIO", "Database Design"],
      color: "text-blue-400"
    },
    {
      title: "FRONTEND & TOOLS",
      skills: ["Angular", "React/Vue", "TypeScript", "TailwindCSS", "Cursor AI", "Jira/Confluence"],
      color: "text-blue-400"
    }
  ]
};