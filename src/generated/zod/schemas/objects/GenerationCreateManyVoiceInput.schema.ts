import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  orgId: z.string(),
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
export const GenerationCreateManyVoiceInputObjectSchema: z.ZodType<Prisma.GenerationCreateManyVoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationCreateManyVoiceInput>;
export const GenerationCreateManyVoiceInputObjectZodSchema = makeSchema();
