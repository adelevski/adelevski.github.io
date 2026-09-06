import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const nonemptyText = z.string().trim().min(1);

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.md" }),
  schema: z
    .object({
      title: nonemptyText,
      summary: nonemptyText,
      publishedDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      authors: z.array(nonemptyText).min(1),
      topics: z.array(nonemptyText).default([]),
      draft: z.boolean().default(false),
    })
    .strict()
    .refine(
      ({ publishedDate, updatedDate }) =>
        !updatedDate || updatedDate >= publishedDate,
      {
        message: "updatedDate cannot be earlier than publishedDate.",
        path: ["updatedDate"],
      },
    ),
});

export const collections = { writing };
