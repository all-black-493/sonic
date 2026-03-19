import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceArgsObjectSchema as VoiceArgsObjectSchema } from './VoiceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  orgId: z.boolean().optional(),
  voiceId: z.boolean().optional(),
  voice: z.union([z.boolean(), z.lazy(() => VoiceArgsObjectSchema)]).optional(),
  voiceName: z.boolean().optional(),
  text: z.boolean().optional(),
  r2ObjectKey: z.boolean().optional(),
  temperature: z.boolean().optional(),
  topP: z.boolean().optional(),
  topK: z.boolean().optional(),
  repetitionPenalty: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const GenerationSelectObjectSchema: z.ZodType<Prisma.GenerationSelect> = makeSchema() as unknown as z.ZodType<Prisma.GenerationSelect>;
export const GenerationSelectObjectZodSchema = makeSchema();
