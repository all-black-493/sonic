import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationWhereInputObjectSchema as GenerationWhereInputObjectSchema } from './GenerationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GenerationWhereInputObjectSchema).optional(),
  some: z.lazy(() => GenerationWhereInputObjectSchema).optional(),
  none: z.lazy(() => GenerationWhereInputObjectSchema).optional()
}).strict();
export const GenerationListRelationFilterObjectSchema: z.ZodType<Prisma.GenerationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GenerationListRelationFilter>;
export const GenerationListRelationFilterObjectZodSchema = makeSchema();
