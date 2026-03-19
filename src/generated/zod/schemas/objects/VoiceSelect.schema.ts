import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationFindManySchema as GenerationFindManySchema } from '../findManyGeneration.schema';
import { VoiceCountOutputTypeArgsObjectSchema as VoiceCountOutputTypeArgsObjectSchema } from './VoiceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  orgId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  category: z.boolean().optional(),
  language: z.boolean().optional(),
  variant: z.boolean().optional(),
  r2ObjectKey: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  generations: z.union([z.boolean(), z.lazy(() => GenerationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VoiceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VoiceSelectObjectSchema: z.ZodType<Prisma.VoiceSelect> = makeSchema() as unknown as z.ZodType<Prisma.VoiceSelect>;
export const VoiceSelectObjectZodSchema = makeSchema();
