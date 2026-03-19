import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { VoiceIncludeObjectSchema as VoiceIncludeObjectSchema } from './objects/VoiceInclude.schema';
import { VoiceOrderByWithRelationInputObjectSchema as VoiceOrderByWithRelationInputObjectSchema } from './objects/VoiceOrderByWithRelationInput.schema';
import { VoiceWhereInputObjectSchema as VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';
import { VoiceWhereUniqueInputObjectSchema as VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';
import { VoiceScalarFieldEnumSchema } from './enums/VoiceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VoiceFindManySelectSchema: z.ZodType<Prisma.VoiceSelect> = z.object({
    id: z.boolean().optional(),
    orgId: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    category: z.boolean().optional(),
    language: z.boolean().optional(),
    variant: z.boolean().optional(),
    r2ObjectKey: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    generations: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VoiceSelect>;

export const VoiceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    orgId: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    category: z.boolean().optional(),
    language: z.boolean().optional(),
    variant: z.boolean().optional(),
    r2ObjectKey: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    generations: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const VoiceFindManySchema: z.ZodType<Prisma.VoiceFindManyArgs> = z.object({ select: VoiceFindManySelectSchema.optional(), include: z.lazy(() => VoiceIncludeObjectSchema.optional()), orderBy: z.union([VoiceOrderByWithRelationInputObjectSchema, VoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoiceWhereInputObjectSchema.optional(), cursor: VoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoiceScalarFieldEnumSchema, VoiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VoiceFindManyArgs>;

export const VoiceFindManyZodSchema = z.object({ select: VoiceFindManySelectSchema.optional(), include: z.lazy(() => VoiceIncludeObjectSchema.optional()), orderBy: z.union([VoiceOrderByWithRelationInputObjectSchema, VoiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoiceWhereInputObjectSchema.optional(), cursor: VoiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VoiceScalarFieldEnumSchema, VoiceScalarFieldEnumSchema.array()]).optional() }).strict();