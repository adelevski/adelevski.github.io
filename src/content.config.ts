import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(["dashboard", "developer"]).optional(),
      liveUrl: z.url().optional(),
      repository: z.url().optional(),
      draft: z.boolean().default(false),
    })
    .superRefine((project, context) => {
      if (
        !project.draft &&
        project.category === "dashboard" &&
        !project.liveUrl
      ) {
        context.addIssue({
          code: "custom",
          message: "A dashboard requires a liveUrl.",
          path: ["liveUrl"],
        });
      }

      if (
        !project.draft &&
        project.category === "developer" &&
        !project.repository
      ) {
        context.addIssue({
          code: "custom",
          message: "A developer tool requires a repository.",
          path: ["repository"],
        });
      }
    }),
});

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()).min(1),
    topics: z.array(z.string()).default([]),
    project: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
