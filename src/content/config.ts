import { defineCollection, z } from "astro:content";

const vinylCollection = defineCollection({
  type: "data",
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
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  vinyl: vinylCollection,
  post: postCollection,
};
