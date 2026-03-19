import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationSelectObjectSchema as GenerationSelectObjectSchema } from './objects/GenerationSelect.schema';
import { GenerationUpdateManyMutationInputObjectSchema as GenerationUpdateManyMutationInputObjectSchema } from './objects/GenerationUpdateManyMutationInput.schema';
import { GenerationWhereInputObjectSchema as GenerationWhereInputObjectSchema } from './objects/GenerationWhereInput.schema';

export const GenerationUpdateManyAndReturnSchema: z.ZodType<Prisma.GenerationUpdateManyAndReturnArgs> = z.object({ select: GenerationSelectObjectSchema.optional(), data: GenerationUpdateManyMutationInputObjectSchema, where: GenerationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GenerationUpdateManyAndReturnArgs>;

export const GenerationUpdateManyAndReturnZodSchema = z.object({ select: GenerationSelectObjectSchema.optional(), data: GenerationUpdateManyMutationInputObjectSchema, where: GenerationWhereInputObjectSchema.optional() }).strict();