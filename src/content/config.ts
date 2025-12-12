import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    coverImage: z.string().optional(),
    coverImagePosition: z.string().optional().default('center'),
  }),
});

const homepageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    featuredProjects: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  homepage: homepageCollection,
};
