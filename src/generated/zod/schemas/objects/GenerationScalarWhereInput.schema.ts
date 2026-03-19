import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const generationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GenerationScalarWhereInputObjectSchema), z.lazy(() => GenerationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GenerationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GenerationScalarWhereInputObjectSchema), z.lazy(() => GenerationScalarWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GenerationScalarWhereInputObjectSchema: z.ZodType<Prisma.GenerationScalarWhereInput> = generationscalarwhereinputSchema as unknown as z.ZodType<Prisma.GenerationScalarWhereInput>;
export const GenerationScalarWhereInputObjectZodSchema = generationscalarwhereinputSchema;
