import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceOrderByWithRelationInputObjectSchema as VoiceOrderByWithRelationInputObjectSchema } from './objects/VoiceOrderByWithRelationInput.schema';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';
import { VoiceCountAggregateInputObjectSchema as VoiceCountAggregateInputObjectSchema } from './objects/VoiceCountAggregateInput.schema';
import { VoiceMinAggregateInputObjectSchema as VoiceMinAggregateInputObjectSchema } from './objects/VoiceMinAggregateInput.schema';
import { VoiceMaxAggregateInputObjectSchema as VoiceMaxAggregateInputObjectSchema } from './objects/VoiceMaxAggregateInput.schema';

export const VoiceAggregateSchema: z.ZodType<Prisma.VoiceAggregateArgs> = z.object({ orderBy: z.union([VoiceOrderByWithRelationInputObjectSchema, VoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoiceWhereInputObjectSchema.optional(), cursor: VoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VoiceCountAggregateInputObjectSchema ]).optional(), _min: VoiceMinAggregateInputObjectSchema.optional(), _max: VoiceMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoiceAggregateArgs>;

export const VoiceAggregateZodSchema = z.object({ orderBy: z.union([VoiceOrderByWithRelationInputObjectSchema, VoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoiceWhereInputObjectSchema.optional(), cursor: VoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VoiceCountAggregateInputObjectSchema ]).optional(), _min: VoiceMinAggregateInputObjectSchema.optional(), _max: VoiceMaxAggregateInputObjectSchema.optional() }).strict();