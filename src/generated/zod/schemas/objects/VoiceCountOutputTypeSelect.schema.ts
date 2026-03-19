import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceCountOutputTypeCountGenerationsArgsObjectSchema as VoiceCountOutputTypeCountGenerationsArgsObjectSchema } from './VoiceCountOutputTypeCountGenerationsArgs.schema'

const makeSchema = () => z.object({
  generations: z.union([z.boolean(), z.lazy(() => VoiceCountOutputTypeCountGenerationsArgsObjectSchema)]).optional()
}).strict();
export const VoiceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.VoiceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.VoiceCountOutputTypeSelect>;
export const VoiceCountOutputTypeSelectObjectZodSchema = makeSchema();
