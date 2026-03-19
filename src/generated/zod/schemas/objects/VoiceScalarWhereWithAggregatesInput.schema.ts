import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumVoiceCategoryWithAggregatesFilterObjectSchema as EnumVoiceCategoryWithAggregatesFilterObjectSchema } from './EnumVoiceCategoryWithAggregatesFilter.schema';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema';
import { EnumVoiceVariantWithAggregatesFilterObjectSchema as EnumVoiceVariantWithAggregatesFilterObjectSchema } from './EnumVoiceVariantWithAggregatesFilter.schema';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const voicescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VoiceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VoiceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoiceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoiceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VoiceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  orgId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  category: z.union([z.lazy(() => EnumVoiceCategoryWithAggregatesFilterObjectSchema), VoiceCategorySchema]).optional(),
  language: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  variant: z.union([z.lazy(() => EnumVoiceVariantWithAggregatesFilterObjectSchema), VoiceVariantSchema]).optional(),
  r2ObjectKey: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VoiceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VoiceScalarWhereWithAggregatesInput> = voicescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VoiceScalarWhereWithAggregatesInput>;
export const VoiceScalarWhereWithAggregatesInputObjectZodSchema = voicescalarwherewithaggregatesinputSchema;
