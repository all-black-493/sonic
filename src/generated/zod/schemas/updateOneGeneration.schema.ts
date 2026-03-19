import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationSelectObjectSchema as GenerationSelectObjectSchema } from './objects/GenerationSelect.schema';
import { GenerationIncludeObjectSchema as GenerationIncludeObjectSchema } from './objects/GenerationInclude.schema';
import { GenerationUpdateInputObjectSchema as GenerationUpdateInputObjectSchema } from './objects/GenerationUpdateInput.schema';
import { GenerationUncheckedUpdateInputObjectSchema as GenerationUncheckedUpdateInputObjectSchema } from './objects/GenerationUncheckedUpdateInput.schema';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './objects/GenerationWhereUniqueInput.schema';

export const GenerationUpdateOneSchema: z.ZodType<Prisma.GenerationUpdateArgs> = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), data: z.union([GenerationUpdateInputObjectSchema, GenerationUncheckedUpdateInputObjectSchema]), where: GenerationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GenerationUpdateArgs>;

export const GenerationUpdateOneZodSchema = z.object({ select: GenerationSelectObjectSchema.optional(), include: GenerationIncludeObjectSchema.optional(), data: z.union([GenerationUpdateInputObjectSchema, GenerationUncheckedUpdateInputObjectSchema]), where: GenerationWhereUniqueInputObjectSchema }).strict();