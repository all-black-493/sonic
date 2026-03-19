import * as z from 'zod';
export const GenerationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  orgId: z.string(),
  voiceId: z.string(),
  voiceName: z.string(),
  text: z.string(),
  r2ObjectKey: z.string(),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number().int(),
  repetitionPenalty: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    orgId: z.number(),
    voiceId: z.number(),
    voice: z.number(),
    voiceName: z.number(),
    text: z.number(),
    r2ObjectKey: z.number(),
    temperature: z.number(),
    topP: z.number(),
    topK: z.number(),
    repetitionPenalty: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    temperature: z.number().nullable(),
    topP: z.number().nullable(),
    topK: z.number().nullable(),
    repetitionPenalty: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    temperature: z.number().nullable(),
    topP: z.number().nullable(),
    topK: z.number().nullable(),
    repetitionPenalty: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    orgId: z.string().nullable(),
    voiceId: z.string().nullable(),
    voiceName: z.string().nullable(),
    text: z.string().nullable(),
    r2ObjectKey: z.string().nullable(),
    temperature: z.number().nullable(),
    topP: z.number().nullable(),
    topK: z.number().int().nullable(),
    repetitionPenalty: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    orgId: z.string().nullable(),
    voiceId: z.string().nullable(),
    voiceName: z.string().nullable(),
    text: z.string().nullable(),
    r2ObjectKey: z.string().nullable(),
    temperature: z.number().nullable(),
    topP: z.number().nullable(),
    topK: z.number().int().nullable(),
    repetitionPenalty: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));