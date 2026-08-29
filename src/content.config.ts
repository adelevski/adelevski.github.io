import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()).min(1),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
