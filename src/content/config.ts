import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    project_url: z.string().url(),
    front_image: z.string(),
    date: z.string().optional(),
    images: z.array(z.string()).optional(),
    youtube: z.array(z.string()).optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
