import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationFindManySchema as GenerationFindManySchema } from '../findManyGeneration.schema';
import { VoiceCountOutputTypeArgsObjectSchema as VoiceCountOutputTypeArgsObjectSchema } from './VoiceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  generations: z.union([z.boolean(), z.lazy(() => GenerationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VoiceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VoiceIncludeObjectSchema: z.ZodType<Prisma.VoiceInclude> = makeSchema() as unknown as z.ZodType<Prisma.VoiceInclude>;
export const VoiceIncludeObjectZodSchema = makeSchema();
