import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceSelectObjectSchema as VoiceSelectObjectSchema } from './VoiceSelect.schema';
import { VoiceIncludeObjectSchema as VoiceIncludeObjectSchema } from './VoiceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VoiceSelectObjectSchema).optional(),
  include: z.lazy(() => VoiceIncludeObjectSchema).optional()
}).strict();
export const VoiceArgsObjectSchema = makeSchema();
export const VoiceArgsObjectZodSchema = makeSchema();
