import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceArgsObjectSchema as VoiceArgsObjectSchema } from './VoiceArgs.schema'

const makeSchema = () => z.object({
  voice: z.union([z.boolean(), z.lazy(() => VoiceArgsObjectSchema)]).optional()
}).strict();
export const GenerationIncludeObjectSchema: z.ZodType<Prisma.GenerationInclude> = makeSchema() as unknown as z.ZodType<Prisma.GenerationInclude>;
export const GenerationIncludeObjectZodSchema = makeSchema();
