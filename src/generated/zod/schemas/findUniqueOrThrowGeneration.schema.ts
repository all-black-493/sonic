import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationSelectObjectSchema as GenerationSelectObjectSchema } from './objects/GenerationSelect.schema';
import { GenerationIncludeObjectSchema as GenerationIncludeObjectSchema } from './objects/GenerationInclude.schema';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './objects/GenerationWhereUniqueInput.schema';

export const GenerationFindUniqueOrThrowSchema: z.ZodType<Prisma.GenerationFindUniqueOrThrowArgs> = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), where: GenerationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GenerationFindUniqueOrThrowArgs>;

export const GenerationFindUniqueOrThrowZodSchema = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), where: GenerationWhereUniqueInputObjectSchema }).strict();