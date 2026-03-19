import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCreateNestedOneWithoutGenerationsInputObjectSchema as VoiceCreateNestedOneWithoutGenerationsInputObjectSchema } from './VoiceCreateNestedOneWithoutGenerationsInput.schema'

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
  voice: z.lazy(() => VoiceCreateNestedOneWithoutGenerationsInputObjectSchema).optional()
}).strict();
export const GenerationCreateInputObjectSchema: z.ZodType<Prisma.GenerationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationCreateInput>;
export const GenerationCreateInputObjectZodSchema = makeSchema();
