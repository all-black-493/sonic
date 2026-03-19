import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationUpdateManyMutationInputObjectSchema as GenerationUpdateManyMutationInputObjectSchema } from './objects/GenerationUpdateManyMutationInput.schema';
import { GenerationWhereInputObjectSchema as GenerationWhereInputObjectSchema } from './objects/GenerationWhereInput.schema';

export const GenerationUpdateManySchema: z.ZodType<Prisma.GenerationUpdateManyArgs> = z.object({ data: GenerationUpdateManyMutationInputObjectSchema, where: GenerationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GenerationUpdateManyArgs>;

export const GenerationUpdateManyZodSchema = z.object({ data: GenerationUpdateManyMutationInputObjectSchema, where: GenerationWhereInputObjectSchema.optional() }).strict();