import * as z from 'zod';
export const VoiceAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    orgId: z.number(),
    name: z.number(),
    description: z.number(),
    category: z.number(),
    language: z.number(),
    variant: z.number(),
    r2ObjectKey: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    generations: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    orgId: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    language: z.string().nullable(),
    r2ObjectKey: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    orgId: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    language: z.string().nullable(),
    r2ObjectKey: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});