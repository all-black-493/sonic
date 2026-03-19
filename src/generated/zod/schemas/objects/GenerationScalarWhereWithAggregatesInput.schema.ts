import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const generationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GenerationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GenerationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GenerationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GenerationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GenerationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  orgId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  voiceId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  voiceName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  r2ObjectKey: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  temperature: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  topP: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  topK: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  repetitionPenalty: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GenerationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GenerationScalarWhereWithAggregatesInput> = generationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GenerationScalarWhereWithAggregatesInput>;
export const GenerationScalarWhereWithAggregatesInputObjectZodSchema = generationscalarwherewithaggregatesinputSchema;
