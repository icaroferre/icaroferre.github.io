import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    project_url: z.string().url().optional(),
    front_image: z.string(),
    year: z.union([z.string(), z.number()]).optional(),
    images: z.array(z.string()).optional(),
    youtube: z.array(z.string()).optional(),
    canonical: z.string().optional(),
  }),
});

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
const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image().optional(),
    }),
});

export const collections = { projects, music, blog };
