import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationSelectObjectSchema as GenerationSelectObjectSchema } from './objects/GenerationSelect.schema';
import { GenerationIncludeObjectSchema as GenerationIncludeObjectSchema } from './objects/GenerationInclude.schema';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './objects/GenerationWhereUniqueInput.schema';

export const GenerationFindUniqueSchema: z.ZodType<Prisma.GenerationFindUniqueArgs> = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), where: GenerationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GenerationFindUniqueArgs>;

export const GenerationFindUniqueZodSchema = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), where: GenerationWhereUniqueInputObjectSchema }).strict();