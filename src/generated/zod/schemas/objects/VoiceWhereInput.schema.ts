import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumVoiceCategoryFilterObjectSchema as EnumVoiceCategoryFilterObjectSchema } from './EnumVoiceCategoryFilter.schema';
import { VoiceCategorySchema } from '../enums/VoiceCategory.schema';
import { EnumVoiceVariantFilterObjectSchema as EnumVoiceVariantFilterObjectSchema } from './EnumVoiceVariantFilter.schema';
import { VoiceVariantSchema } from '../enums/VoiceVariant.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GenerationListRelationFilterObjectSchema as GenerationListRelationFilterObjectSchema } from './GenerationListRelationFilter.schema'

const voicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VoiceWhereInputObjectSchema), z.lazy(() => VoiceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoiceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoiceWhereInputObjectSchema), z.lazy(() => VoiceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orgId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  category: z.union([z.lazy(() => EnumVoiceCategoryFilterObjectSchema), VoiceCategorySchema]).optional(),
  language: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  variant: z.union([z.lazy(() => EnumVoiceVariantFilterObjectSchema), VoiceVariantSchema]).optional(),
  r2ObjectKey: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  generations: z.lazy(() => GenerationListRelationFilterObjectSchema).optional()
}).strict();
export const VoiceWhereInputObjectSchema: z.ZodType<Prisma.VoiceWhereInput> = voicewhereinputSchema as unknown as z.ZodType<Prisma.VoiceWhereInput>;
export const VoiceWhereInputObjectZodSchema = voicewhereinputSchema;
