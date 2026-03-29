import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const vinylCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/vinyl" }),
  schema: z.object({
    artist: z.string(),
    cover_image: z.string(),
    date_added: z.string(),
    file_name: z.string(),
    resource_id: z.number(),
    title: z.string(),
    video_id: z.string().nullable(),
    year: z.number(),
  }),
});

const postCollection = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/post" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  vinyl: vinylCollection,
  post: postCollection,
};
