import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    authorType: z.enum(['human', 'ai', 'collaborative']).default('human'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'development', 'research', 'planning']),
    tags: z.array(z.string()).default([]),
    lead: z.string().optional(),
    order: z.number().default(0),
    heroImage: z.string().optional(),
    repository: z.string().optional(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    type: z.enum(['human', 'ai']),
    location: z.string().optional(),
    avatar: z.string().optional(),
    specialties: z.array(z.string()).default([]),
    order: z.number().default(0),
    links: z.object({
      github: z.string().optional(),
      website: z.string().optional(),
      discord: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog, projects, team };
