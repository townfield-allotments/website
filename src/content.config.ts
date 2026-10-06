import { defineCollection, z } from 'astro:content';

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(), // Date the photos were added
    description: z.string(),
    folderId: z.string(), // Folder name in public/images/
    slug: z.string(),
  }),
});

export const collections = { galleries };