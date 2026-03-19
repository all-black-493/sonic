import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationWhereInputObjectSchema as GenerationWhereInputObjectSchema } from './objects/GenerationWhereInput.schema';

export const GenerationDeleteManySchema: z.ZodType<Prisma.GenerationDeleteManyArgs> = z.object({ where: GenerationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GenerationDeleteManyArgs>;

export const GenerationDeleteManyZodSchema = z.object({ where: GenerationWhereInputObjectSchema.optional() }).strict();