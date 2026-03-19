import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VoiceNullableScalarRelationFilterObjectSchema as VoiceNullableScalarRelationFilterObjectSchema } from './VoiceNullableScalarRelationFilter.schema';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './VoiceWhereInput.schema'

const generationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GenerationWhereInputObjectSchema), z.lazy(() => GenerationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GenerationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GenerationWhereInputObjectSchema), z.lazy(() => GenerationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orgId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  voiceId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  voiceName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  r2ObjectKey: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  temperature: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  topP: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  topK: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  repetitionPenalty: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  voice: z.union([z.lazy(() => VoiceNullableScalarRelationFilterObjectSchema), z.lazy(() => VoiceWhereInputObjectSchema)]).optional()
}).strict();
export const GenerationWhereInputObjectSchema: z.ZodType<Prisma.GenerationWhereInput> = generationwhereinputSchema as unknown as z.ZodType<Prisma.GenerationWhereInput>;
export const GenerationWhereInputObjectZodSchema = generationwhereinputSchema;
