import { defineCollection, z } from "astro:content";

// Define a "blog" collection with schema validation

const music = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    artwork: z.string(),
    bandcamp: z.string().optional(),
    applemusic: z.string().optional(),
    spotify: z.string().optional(),
    youtube: z.string().optional(),
    label: z.string(),
    tracklist: z.array(z.string()).optional(),
  }),
});
export const collections = { music };
