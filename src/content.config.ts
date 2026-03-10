import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    location: z.string(),
    role: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable(), // null means "Present"
    description: z.string(),
    achievements: z.array(z.string()),
    stack: z.array(z.string()),
  }),
});

// ADD THIS SECTION:
const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imagePath: z.string(), // e.g., "../../assets/project1.png"
    tags: z.array(z.string()),
    link: z.string(),
    sortOrder: z.number(),
  }),
});

export const collections = { experience, projects };