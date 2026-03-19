import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const GenerationWhereUniqueInputObjectSchema: z.ZodType<Prisma.GenerationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GenerationWhereUniqueInput>;
export const GenerationWhereUniqueInputObjectZodSchema = makeSchema();
