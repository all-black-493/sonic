import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceOrderByWithRelationInputObjectSchema as VoiceOrderByWithRelationInputObjectSchema } from './objects/VoiceOrderByWithRelationInput.schema';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';
import { VoiceCountAggregateInputObjectSchema as VoiceCountAggregateInputObjectSchema } from './objects/VoiceCountAggregateInput.schema';

export const VoiceCountSchema: z.ZodType<Prisma.VoiceCountArgs> = z.object({ orderBy: z.union([VoiceOrderByWithRelationInputObjectSchema, VoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoiceWhereInputObjectSchema.optional(), cursor: VoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VoiceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VoiceCountArgs>;

export const VoiceCountZodSchema = z.object({ orderBy: z.union([VoiceOrderByWithRelationInputObjectSchema, VoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoiceWhereInputObjectSchema.optional(), cursor: VoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VoiceCountAggregateInputObjectSchema ]).optional() }).strict();