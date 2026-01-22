import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Haodell Tech Team'),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Server', 'Workstation', 'Storage']),
    price: z.string(),
    image: z.string(),
    badge: z.string().optional(),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string()
    })),
  }),
});

export const collections = {
  posts: postsCollection,
  products: productsCollection,
};
