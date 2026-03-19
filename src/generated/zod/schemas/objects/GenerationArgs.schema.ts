import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GenerationSelectObjectSchema as GenerationSelectObjectSchema } from './GenerationSelect.schema';
import { GenerationIncludeObjectSchema as GenerationIncludeObjectSchema } from './GenerationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GenerationSelectObjectSchema).optional(),
  include: z.lazy(() => GenerationIncludeObjectSchema).optional()
}).strict();
export const GenerationArgsObjectSchema = makeSchema();
export const GenerationArgsObjectZodSchema = makeSchema();
