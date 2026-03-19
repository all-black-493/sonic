import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VoiceOrderByWithRelationInputObjectSchema as VoiceOrderByWithRelationInputObjectSchema } from './VoiceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  voiceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  voiceName: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  r2ObjectKey: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  temperature: SortOrderSchema.optional(),
  topP: SortOrderSchema.optional(),
  topK: SortOrderSchema.optional(),
  repetitionPenalty: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  voice: z.lazy(() => VoiceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const GenerationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GenerationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationOrderByWithRelationInput>;
export const GenerationOrderByWithRelationInputObjectZodSchema = makeSchema();
