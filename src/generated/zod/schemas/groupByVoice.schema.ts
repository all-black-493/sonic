import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';
import { VoiceOrderByWithAggregationInputObjectSchema as VoiceOrderByWithAggregationInputObjectSchema } from './objects/VoiceOrderByWithAggregationInput.schema';
import { VoiceScalarWhereWithAggregatesInputObjectSchema as VoiceScalarWhereWithAggregatesInputObjectSchema } from './objects/VoiceScalarWhereWithAggregatesInput.schema';
import { VoiceScalarFieldEnumSchema } from './enums/VoiceScalarFieldEnum.schema';
import { VoiceCountAggregateInputObjectSchema as VoiceCountAggregateInputObjectSchema } from './objects/VoiceCountAggregateInput.schema';
import { VoiceMinAggregateInputObjectSchema as VoiceMinAggregateInputObjectSchema } from './objects/VoiceMinAggregateInput.schema';
import { VoiceMaxAggregateInputObjectSchema as VoiceMaxAggregateInputObjectSchema } from './objects/VoiceMaxAggregateInput.schema';

export const VoiceGroupBySchema: z.ZodType<Prisma.VoiceGroupByArgs> = z.object({ where: VoiceWhereInputObjectSchema.optional(), orderBy: z.union([VoiceOrderByWithAggregationInputObjectSchema, VoiceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VoiceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VoiceScalarFieldEnumSchema), _count: z.union([ z.literal(true), VoiceCountAggregateInputObjectSchema ]).optional(), _min: VoiceMinAggregateInputObjectSchema.optional(), _max: VoiceMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoiceGroupByArgs>;

export const VoiceGroupByZodSchema = z.object({ where: VoiceWhereInputObjectSchema.optional(), orderBy: z.union([VoiceOrderByWithAggregationInputObjectSchema, VoiceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VoiceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VoiceScalarFieldEnumSchema), _count: z.union([ z.literal(true), VoiceCountAggregateInputObjectSchema ]).optional(), _min: VoiceMinAggregateInputObjectSchema.optional(), _max: VoiceMaxAggregateInputObjectSchema.optional() }).strict();