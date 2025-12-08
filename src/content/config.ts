import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    coverImage: z.string().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
