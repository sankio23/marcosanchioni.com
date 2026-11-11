import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    thumb: z.string().optional(),
    share: z.string().optional(),
    heroCredit: z.string().optional(),
    heroCreditUrl: z.string().optional(),
    heroPosition: z.string().optional(),
    draft: z.boolean().default(false),
    // Built and reachable by its URL, but kept out of the blog list, the RSS
    // feed and search engines: for sharing a post privately before release.
    unlisted: z.boolean().default(false),
  }),
});

export const collections = { blog };
