import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  orgId: z.string(),
  voiceId: z.string().optional().nullable(),
  voiceName: z.string(),
  text: z.string(),
  r2ObjectKey: z.string().optional().nullable(),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number().int(),
  repetitionPenalty: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GenerationCreateManyInputObjectSchema: z.ZodType<Prisma.GenerationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationCreateManyInput>;
export const GenerationCreateManyInputObjectZodSchema = makeSchema();
