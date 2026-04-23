import { object, string, literal, nullable } from "valibot";

export const MetadataSchema = object({
  ok: literal(true),
  data: object({
    logo: nullable(string()),
    author: nullable(string()),
    date: string(),
    datePublished: nullable(string()),
    dateModified: nullable(string()),
    description: nullable(string()),
    feed: nullable(string()),
    image: nullable(string()),
    audio: nullable(string()),
    lang: nullable(string()),
    publisher: nullable(string()),
    title: string(),
    video: nullable(string()),
    url: string(),
  }),
});

export type Metadata = {
  ok: boolean;
  data: {
    logo: string | null;
    author: string | null;
    date: string;
    datePublished: string | null;
    dateModified: string | null;
    description: string | null;
    feed: string | null;
    image: string | null;
    audio: string | null;
    lang: string | null;
    publisher: string | null;
    title: string;
    video: string | null;
    url: string;
  };
};