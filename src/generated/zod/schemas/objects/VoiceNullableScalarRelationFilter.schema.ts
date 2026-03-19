import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './VoiceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => VoiceWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => VoiceWhereInputObjectSchema).optional().nullable()
}).strict();
export const VoiceNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.VoiceNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VoiceNullableScalarRelationFilter>;
export const VoiceNullableScalarRelationFilterObjectZodSchema = makeSchema();
