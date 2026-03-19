import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCountOutputTypeSelectObjectSchema as VoiceCountOutputTypeSelectObjectSchema } from './VoiceCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VoiceCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const VoiceCountOutputTypeArgsObjectSchema = makeSchema();
export const VoiceCountOutputTypeArgsObjectZodSchema = makeSchema();
