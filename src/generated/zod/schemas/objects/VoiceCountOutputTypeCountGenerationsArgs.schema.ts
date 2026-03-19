import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationWhereInputObjectSchema as GenerationWhereInputObjectSchema } from './GenerationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GenerationWhereInputObjectSchema).optional()
}).strict();
export const VoiceCountOutputTypeCountGenerationsArgsObjectSchema = makeSchema();
export const VoiceCountOutputTypeCountGenerationsArgsObjectZodSchema = makeSchema();
