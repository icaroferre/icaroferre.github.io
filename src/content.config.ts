import { defineCollection, z } from "astro:content";

// Define a "blog" collection with schema validation
const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = { project };
