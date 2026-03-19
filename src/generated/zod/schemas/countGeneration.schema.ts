import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GenerationOrderByWithRelationInputObjectSchema as GenerationOrderByWithRelationInputObjectSchema } from './objects/GenerationOrderByWithRelationInput.schema';
import { GenerationWhereInputObjectSchema as GenerationWhereInputObjectSchema } from './objects/GenerationWhereInput.schema';
import { GenerationWhereUniqueInputObjectSchema as GenerationWhereUniqueInputObjectSchema } from './objects/GenerationWhereUniqueInput.schema';
import { GenerationCountAggregateInputObjectSchema as GenerationCountAggregateInputObjectSchema } from './objects/GenerationCountAggregateInput.schema';

export const GenerationCountSchema: z.ZodType<Prisma.GenerationCountArgs> = z.object({ orderBy: z.union([GenerationOrderByWithRelationInputObjectSchema, GenerationOrderByWithRelationInputObjectSchema.array()]).optional(), where: GenerationWhereInputObjectSchema.optional(), cursor: GenerationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GenerationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GenerationCountArgs>;

export const GenerationCountZodSchema = z.object({ orderBy: z.union([GenerationOrderByWithRelationInputObjectSchema, GenerationOrderByWithRelationInputObjectSchema.array()]).optional(), where: GenerationWhereInputObjectSchema.optional(), cursor: GenerationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GenerationCountAggregateInputObjectSchema ]).optional() }).strict();